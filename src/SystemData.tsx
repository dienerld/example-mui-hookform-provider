import { Alert, Box, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { DataCreate } from './App';

export function SystemData() {
  const {
    control,
    formState: { errors },
  } = useFormContext<DataCreate>();

  return (
    <Box sx={{
      display: 'flex',
      gap: 1,
      flexDirection: 'column',
    }}>
<p>
  Preenher dados de sistema
</p>

      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Papel"
            autoFocus
            type="name"
            error={!!errors.role}
            helperText={errors?.role?.message}
            variant="outlined"
            required
            fullWidth
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="username"
            autoFocus
            type="password"
            error={!!errors.username}
            helperText={errors?.username?.message}
            variant="outlined"
            required
            fullWidth
          />
        )}
      />
    </Box>
  );
}
