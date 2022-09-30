import { useDispatch, useSelector } from "react-redux"
import { change } from 'redux/filterSlice'

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    return(
        <label
        style={{
            display:"flex",
            flexDirection:"column",
            border: "1px solid gray",
            padding: "16px",
            borderRadius: "4px",
            marginTop: "16px",
        }}>
            Find contact by name 
            <input 
            type="text" 
            value={filter}
            onChange={e => dispatch(change(e.target.value))}
            ></input>
        </label>
    )
}