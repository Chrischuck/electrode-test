import fetch from 'node-fetch';

export const toggleCheck = () => {
  return {
    type: "TOGGLE_CHECK"
  };
};

export const incNumber = () => {
  return {
    type: "INC_NUMBER"
  };
};

export const decNumber = () => {
  return {
    type: "DEC_NUMBER"
  };
};


// can make server actions
export const getDogPic = () => {
  return async function(dispatch) {
    const { url } = await fetch('https://random.dog/woof.json').then(res => res.json())

    dispatch({
      type: 'DOG_PIC',
      payload: {
        url
      }
    })
  }
}
