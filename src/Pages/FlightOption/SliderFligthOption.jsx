import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/react'
import React, { useState } from 'react'


function FligthOptionSlider() {
    const [sliderValue, setSliderValue] = useState(27)

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }

    return (
        <Box pt={6} pb={2}>
            <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>

                <SliderMark
                    value={sliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                >
                    {sliderValue}hr
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </Box>
    )
}



export default FligthOptionSlider