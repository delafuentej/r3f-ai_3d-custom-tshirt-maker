import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config';

const CustomButton = ({type, handleClick, customStyles, title}) => {

  const snap = useSnapshot(state);

  const generateStyle = (type) => {

    switch(type){
      case 'filled':
        return {
          backgroundColor: snap.color,
          color: getContrastingColor(snap.color),
        };
      case 'outline':
        return {
          borderWidth: '1px',
          borderColor: snap.color,
          color: snap.color
        };
      default: 
        return {

        }
    }
  }
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      type={type}
      onClick={handleClick}
     
    >

    {title}
    </button>
  )
}

export default CustomButton;