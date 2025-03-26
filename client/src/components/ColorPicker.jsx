import {SketchPicker} from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';


const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={[
          '#000000','#404040','#800080', '#964b00',
          '#808080','#ffffff', '#ff0000','#00ff00',
          '#0000ff', '#ffff00','#00ffff','#ff00ff',
          '#ffa500','#50c878'
        ]}

      />
    </div>
  )
}

export default ColorPicker;