import {useEffect} from 'react'
import { Button } from "client/src/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "client/src/components/ui/card"
import { Input } from "client/src/components/ui/input"
import { Label } from "client/src/components/ui/label"
import { Link } from 'react-router-dom'
const Login = () => {

  useEffect(() => {
    
  }, [])

  return (
    <div className='flex justify-center items-center mt-[3rem]'>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Welcome Back!!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Enter your Name" />
            </div>
        
            <div className="flex flex-col space-y-1.5">
               <Label htmlFor="name">Password</Label>
              <Input id="name" placeholder="Enter your Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-[.2rem] justify-center">
        <Button>Sign In</Button>
        <CardDescription>Don't have an account? <Link to="/signup" className='font-bold text-black'>Create Account</Link> </CardDescription>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login