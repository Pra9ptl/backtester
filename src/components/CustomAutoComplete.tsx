import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

type autoCompleteProps = {
    options: any,
    label: String,
    icon: any
}

const CustomAutoComplete = (props: autoCompleteProps) => {
    return (
        <div style={{ margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {props.icon}
            <Autocomplete
                id="combo-box-demo"
                options={props.options}
                getOptionLabel={(option: any) => option.title}
                style={{ width: 300 }}
                renderInput={(params: any) => <TextField {...params} label={props.label} variant="standard" />}
            />
        </div>
    )
};

export default CustomAutoComplete;