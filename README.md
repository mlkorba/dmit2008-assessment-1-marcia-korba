# Async & Await Templating
Data for this example is inside the ```db``` folder and the file is called ```employees.json```

## Template Styles
```css
  main{
        padding:3rem 1rem;
      }
      .employee {
        padding: 0.5rem 1rem;
       
      }
      .profile {
        display: flex;
        align-items: center;
        box-shadow: 0 0 2px 0 rgb(193, 191, 191);
        border-radius: 3px;
        padding:1rem;
      }

    

      .employee h2 {
        font-size: 1.5rem;
        font-weight: 600;
      }

      .profile img {
        width: 86px;
        height: 86px;
        border-radius: 50%;
        align-self: center;
        border:2px solid white;
        box-shadow: 0 0 2px 1px rgb(103, 102, 102);
  
      }

      .bio {
        font-size:14px;
        flex-grow: 1;
        margin-left: 1rem;
        padding: 0.5rem 1rem;
      }
```



# Template Markup
```template
<aside class="employee">
      <header>
        <h2>Full Name</h2>
      </header>
      <div class="profile">
        <img src="/profiles/m/emp-id-747b-19.jpg" alt="" />

        <div class="bio">
          <ul>
            <li>job title: developer</li>
            <li>employment: years</li>
            <li>email</li>
            <li>phone number</li>
          </ul>
        </div>
      </div>
    </aside>
```