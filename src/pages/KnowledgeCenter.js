import React from 'react'

const content = [{
  id: 1,
  navTitle: "Sample Title",
  title: "Sample Content Title",
  subTitle: "",
  author: "John Doe",
  creationDate: "2023-10-20",
  bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero sit amet justo hendrerit hendrerit. Fusce non velit eu mi tincidunt fermentum. Donec vel scelerisque lectus. Sed venenatis nisl in justo egestas, ac ultricies risus dictum. Aenean nec massa vitae nulla auctor laoreet. Suspendisse potenti. Proin feugiat justo non varius euismod. Integer in libero quis quam euismod sagittis. Cras lacinia, purus ac iaculis hendrerit, est neque aliquam est, in elementum libero eros ut odio. Quisque aliquam justo vel urna vehicula, sit amet scelerisque tortor tincidunt. Aliquam erat volutpat. Suspendisse potenti."
}];


const KnowledgeCenter = () => {
  return (
    <div className='flex p-4 gap-4'>
      <aside className='pt-8'>
        <ul className="menu bg-base-200 w-56 rounded-lg p8 ">
          <p className='font-bold text-lg pl-4'>Artikler:</p>
          <div className='divider m-0' />
          {content.map((item) => (
             <li><a>{item.navTitle}</a></li>
          ))}
        </ul>
      </aside>
      <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div class="mx-auto w-full min-w-0">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Videnscenter</a></li> 
            <li><a>Introduktion</a></li> 
          </ul>
        </div>
          <div class="space-y-2">
            <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">Introduktion</h1>
            <div className='flex gap-2 items-center pt-1 pb-4'>
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span>TB</span>
                </div>
              </div> 
              <div>
                <p className='text-sm'>Skrevet af Torben Breindahl</p> 
                <p className='text-sm'>Cand. scient med.</p>
              </div>
            </div>
            <p class="text-lg text-muted-foreground">
              <span style={{display: "inline-block", verticalAlign: "top", textDecoration:" inherit", maxWidth:" 522px",}}>
                Re-usable components built using Radix UI and Tailwind CSS.
              </span>
            </p>
          </div>
          <div class="pb-12 pt-8">
            <div class="mdx ">
              <p class="text-base [&amp;:not(:first-child)]:mt-6">This is <strong>NOT</strong> a component library. It's a collection of re-usable components that you can copy and paste into your apps.</p>
              <p class="text-base [&amp;:not(:first-child)]:mt-6"><strong>What do you mean by not a component library?</strong></p>
              <p class="text-base [&amp;:not(:first-child)]:mt-6">I mean you do not install it as a dependency. It is not available or distributed via npm.</p>
              <p class="text-base [&amp;:not(:first-child)]:mt-6">Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.</p>
              <p class="text-base [&amp;:not(:first-child)]:mt-6"><em>Use this as a reference to build your own component libraries.</em></p>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default KnowledgeCenter