# Client Side Routing

## SWBATs:

- [ ] Review the difference between server-side and client-side routing
- [ ] Observe a refactor to include client-side routing using React Router V6
- [ ] Observe how to use the react-router-dom hook useParams

---

## Planning

What URLs do we want our application to have to simulate the feeling of different "pages"?

| Component       | Url                |
| --------------- | ------------------ |
| Home            | / (root route)     |
| About           | /about             |
| CreateProject     | /projects/new      |
| EditProject | /projects/:id/edit |
| ProjectDetail   | /projects/:id      |
| ProjectPage     | /projects          |

🛑🛑🛑🛑🛑<strong>THESE ARE DIFFERENT THAN THE SERVER ROUTES</strong>🛑🛑🛑🛑🛑

---

## Deliverables

#### 1. Install and setup react router in `index.js`

##### 1a. Within `index.js`, import the `react-router-dom` library and wrap the `App` component with `BrowserRouter` 

<br /> 

#### 2. Creater a Router tree in `App.js` with the following routes:
##### - `/home` to `<Home />`
##### - `/new` to `<CreateProjectForm />`
##### - `/about` to `<About />`
##### - `/projects` to `<ProjectsPage />`
##### - `/projects/:id` to `<ProjectDetails />`
##### - `/projects/new` to `<CreateProjectForm />`
##### - `/projects/:id/edit` to `<EditProjectForm />`


<br /> 


#### 3. Add `Link`s and `NavLink`s in `Header` for the new routes
##### 3a. Include a `Link` on button `View All Projects` in `Home` that navigates to `/projects`
##### 3b. In `ProjectsPage` replace `<CreateProjectForm />` with a `Link` to the appropriate route

<br /> 

#### 4. In `CreateProjectForm` redirect to the `/projects` page when a new project is successfully created.


<br /> 


#### 8. In `ProjectListItem` add a `Link` that navigates to `/project/:id`
##### 8a. Include the id in the `Link`
##### 8b. Use a fetch request in `ProjectDetails` to access a single project

<br />

```js
    <div className="card project-detail">
        <figure className="image">
            <img src={project.image} alt={project.name} />
            <button className="claps" onClick={handleClaps}>
                👏{project.claps}
            </button>
        </figure>
        <section className="details">
            <h4>{project.name}</h4>
            <p>{project.about}</p>
            <p>
                <a href={project.link}>Link</a>
            </p>
        </section>
        <div className="extra">
            <span className="badge blue">Phase {project.phase}</span>
            <div className="manage">
                <Link to={`/projects/${project.id}/edit`} state={{project}}>
                    <button>
                        <FaPencilAlt />
                    </button>
                </Link>
            </div>
            {/* note no delete for ease of demonstration */}
        </div>
    </div>
```


<br /> 

#### 9. In `App` create a route for `/project/:id/edit`
##### 9a. In `ProjectDetails` create a `Link` to `/project/:id/edit` with state `project`
##### 9b. Navigate to `/projects` upon successful submission of the edit form.

