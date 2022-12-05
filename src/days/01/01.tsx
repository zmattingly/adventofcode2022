
import React, { FormEvent } from 'react'

const calculateCalories = (caloriesList: string) => {
  const elves = caloriesList.split(/\n\s*\n/)
  const mostCalorific = {
    index: 0,
    value: 0
  }
  const totalCalorieSums: number[] = []

  elves.forEach((elf: string, idx: number) => {
    const calories = elf.split(/\r?\n/)
    const total = calories.reduce(
      (accumulator: number, currentValue: string) => accumulator + parseInt(currentValue),
      0
    )
    // Add to an array of total calorie sums
    totalCalorieSums.push(total)

    if (total > mostCalorific.value) {
      mostCalorific.value = total
      mostCalorific.index = idx
    }
  })

  totalCalorieSums.sort((a, b) => a - b).reverse()
  console.info({ totalCalorieSums })

  const topThree = totalCalorieSums.slice(0, 3)

  return {
    mostCalories: mostCalorific.value,
    topThree,
    topThreeTotal: topThree.reduce((total, currentValue) => total + currentValue, 0)
  }
}

function Day01() {
  const [text, setText] = React.useState("")
  const [solution, setSolution] = React.useState({ mostCalories: 0, topThree: [0], topThreeTotal: 0 })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    runSolution()
  }

  const runSolution = () => {
    const newSolution = calculateCalories(text)
    setSolution(newSolution)
  }

  return (
    <div className="Day">
      <h1>Day 01</h1>
      <section>
        <form className="SolutionForm" onSubmit={handleSubmit}>
          <h3>Input</h3>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <input type="submit" value="Submit" />
        </form>
        <h3>Solution</h3>
        <h5>Most Calories: {solution.mostCalories}</h5>
        <h5>Top Three Total: {solution.topThreeTotal}</h5>
        <h5>Top Calorie Counts:</h5>
        <ul>
          {solution.topThree.map(count => <li key={count}>{count}</li>)}
        </ul>
      </section>
    </div>
  )
}


export default Day01