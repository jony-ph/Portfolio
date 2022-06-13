import { projectList } from './data.js'

const projects = document.querySelector('.projects')

eventListeners()
function eventListeners() {
  document.addEventListener('DOMContentLoaded', showProjects)
}

function showProjects() {

  projectList.forEach( project => {

    const container = document.createElement('div')
    container.classList.add('projects__div')

      const image = document.createElement('img')
      image.classList.add('projects__div-img')
      image.src = project.image;
      image.alt = "Covers of my projects"

      const span = document.createElement('span')
      span.classList.add('projects__div-span')

        const ul = document.createElement('ul')
        ul.classList.add('list-tech')
    
          for(let i = 0; i < project.techs.length; i++) {
            const li = document.createElement('li')
            li.classList.add('list-tech__li')
  
              const icon = document.createElement('img')
              icon.src = project.techs[i]

            li.appendChild(icon)
            ul.appendChild(li) 
          }

        const title = document.createElement('h3')
        title.classList.add('projects__div-span-h3')
        title.textContent = project.title

        const description = document.createElement('p')
        description.classList.add('projects__div-span-p')
        description.textContent = project.description

        const view = document.createElement('a')
        view.classList.add('projects__div-span-a')
        view.href = project.view
        view.textContent = 'View '

          const eye = document.createElement('i')
          eye.classList.add('icon-eye')

        view.appendChild(eye)

        const code = document.createElement('a')
        code.classList.add('projects__div-span-a')
        code.href = project.code
        code.textContent = 'Code '

          const github = document.createElement('i')
          github.classList.add('icon-github')

        code.appendChild(github)

      span.appendChild(ul)
      span.appendChild(title)
      span.appendChild(description)
      span.appendChild(view)
      span.appendChild(code)

    container.appendChild(image)
    container.appendChild(span)

    projects.appendChild(container)
    
  })

}

