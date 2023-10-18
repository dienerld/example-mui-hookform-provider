import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';

import { Button, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { PersonalData } from './PersonalData';
import { SystemData } from './SystemData';
import { FormProvider, useForm } from 'react-hook-form';

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().min(5).required(),
  role: yup.string().required(),
  username: yup.string().required(),
});

export type DataCreate = yup.InferType<typeof schema>;

export default function App() {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const methods = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  })

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Dados pessoais" />
          <Tab value="two" label="Dados de Sistema" />
          <Tab value="three" label="Item Three" />
        </Tabs>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            {value === 'one' && <PersonalData />}
            {value === 'two' && <SystemData />}
            {value === 'three' && <p>Three</p>}


            <Button variant='contained' type="submit"
              disabled={!methods.formState.isValid}
            >Submit</Button>
          </form>
        </FormProvider>
      </Box>
    </Container>
  );
}
