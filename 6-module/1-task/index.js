/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows
    let table = document.createElement('table')
    let thead = document.createElement('thead')

    thead.innerHTML = 
    `<tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>`
    table.appendChild(thead)

    for (let row of rows) {
      let tbody = document.createElement ('tbody')
      let tr = document.createElement ('tr')

      let tdName = document.createElement ('td')
      let nameField = document.createTextNode(`${row.name}`)
      tdName.appendChild(nameField)
      tr.appendChild(tdName)

      let tdAge = document.createElement ('td')
      let ageField = document.createTextNode(`${row.age}`)
      tdAge.appendChild(ageField)
      tr.appendChild(tdAge)

      let tdSalary = document.createElement ('td')
      let salaryField = document.createTextNode(`${row.salary}`)
      tdSalary.appendChild(salaryField)
      tr.appendChild(tdSalary)

      let tdCity = document.createElement ('td')
      let cityField = document.createTextNode(`${row.city}`)
      tdCity.appendChild(cityField)
      tr.appendChild(tdCity)

      let tdBtn = document.createElement ('td')
      let btn = document.createElement ('button')
      let btnField = document.createTextNode('X')
      btn.appendChild(btnField)
      tdBtn.appendChild(btn)
      tr.appendChild(tdBtn)

      table.appendChild(tbody)
      tbody.appendChild(tr)
    }
    
    table.onclick = function(event) {
      event.target.closest('tr').remove()
    }
    this.elem = table;
  }  
}
