import { useState } from 'react'

const useValue = () => {
    const [value, setValue] = useState(0)
    const increaseValueHandler = () => {
        setValue((oldNum) => { return oldNum + 1 })
    }

    return [value, increaseValueHandler]
}

export default useValue
