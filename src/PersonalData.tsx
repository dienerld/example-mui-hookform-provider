import { Box, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { DataCreate } from './App';

export function PersonalData() {
  const {
    control,
    formState: { errors },
  } = useFormContext<DataCreate>();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexDirection: 'column',
      }}
    >
      <p>Preenher dados de sistema</p>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Nome"
            autoFocus
            type="name"
            error={!!errors.name}
            helperText={errors?.name?.message}
            variant="outlined"
            required
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Senha"
            autoFocus
            type="password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            variant="outlined"
            required
            fullWidth
          />
        )}
      />
    </Box>
  );
}
