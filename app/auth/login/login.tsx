'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormState } from 'react-dom';

import { loginAction } from 'lib/actions/auth';
import { validation } from 'lib/validations/auth';

export default function Login({ onSubmit }: { onSubmit: typeof loginAction }) {
  const [lastResult, action] = useFormState(onSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validation });
    },
    shouldValidate: 'onBlur',
  });
  return (
    <Grid className="grid grid-cols-5">
      <Container className="col-span-2 h-[100vh] w-[100%] bg-[url(/login.png)] bg-cover bg-left bg-no-repeat"></Container>

      <Container component="main" className="relative col-span-3 content-center">
        <Box className="mt-16 flex h-auto flex-col items-center">
          <Typography component="h1" variant="h4" color="primary.dark" gutterBottom className="font-bold">
            業務管理システム
          </Typography>
          <Box component="form" action={action} {...getFormProps(form)} className="mt-2">
            <TextField
              margin="normal"
              required
              fullWidth
              label="メールアドレス"
              autoComplete="email"
              autoFocus
              {...getInputProps(fields.email, { type: 'email' })}
              key={fields.email.key}
              error={!!fields.email.errors}
              helperText={fields.email.errors}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="パスワード"
              autoComplete="current-password"
              {...getInputProps(fields.password, { type: 'password' })}
              key={fields.password.key}
              error={!!fields.password.errors}
              helperText={fields.password.errors}
            />
            <Grid container>
              <Grid item xs>
                パスワードを忘れた方は管理者にご連絡ください。
              </Grid>
            </Grid>
            {form.errors && <div className="text-center text-red-600">{form.errors}</div>}
            <Button type="submit" fullWidth variant="contained" className="mb-4 mt-6">
              ログイン
            </Button>
          </Box>
          <Box className="absolute bottom-3">
            <Typography variant="body2" align="center">
              © 2024 サンプル空調
            </Typography>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
}
