import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivion, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();

    return (
        <>
           <Typography variant="h6" gutterBottom={true}>Shipping Address</Typography>
           <FormProvider {...methods}>
               <form onSubmit=''>
                   <Grid container spacing={3} sm={12} lg={6} md={6}>
                    <FormInput required name='firstName' label='First Name'/>
                    <FormInput required name='lastName' label='Last Name'/>
                    <FormInput required name='address' label='Address'/>
                    <FormInput required name='email' label='Email'/>
                    <FormInput required name='city' label='City'/>
                    <FormInput required name='pin' label='PIN code'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid>
               </form>
           </FormProvider>
        </>
    )
}

export default AddressForm;
