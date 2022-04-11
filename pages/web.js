import Link from "next/dist/client/link"
export default function webDev() {
  return (
    <div>
        <main>
            <header>
                <h1>This is the webdevelopment page</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nihil earum, voluptatum animi repellat neque eum fugit blanditiis expedita culpa possimus provident perspiciatis tempora aliquid est, veritatis ipsum voluptatibus enim.</p>
                <Link href="/">Go back to Home page</Link>
            </header>
            
        </main>
        
    </div>
  )
}