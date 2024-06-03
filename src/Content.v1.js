import { useState } from "react"

const Content = () => {
    const [name, setName] = useState('Dave')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave']
        const int = Math.floor(Math.random() * 3)
        setName(names[int])
    }

    const handleClickWithCount = () => {
        setCount(count + 1)
        console.log(`Clicked. Count is ${count}.`)
    }

    const showCount = () => {
        console.log(`Current count is ${count}`)
    }

    const handleClickWithName = (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClickWithEvent = (e) => {
        console.log(e.target.innerText)
    }

    const handleDoubleClick = () => {
        console.log('Double clicked')
    }

    return (
        <main>
            <p>
                Hello {name}
            </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={handleClickWithCount}>Change count</button>
            <button onClick={showCount}>Show count</button>
            <button onClick={() => handleClickWithName('Dave')}>Click Dave</button>
            <button onClick={(e) => handleClickWithEvent(e)}>Click Event</button>
            <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </main>
    )
}

export default Content