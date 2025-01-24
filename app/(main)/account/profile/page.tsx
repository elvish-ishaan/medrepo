'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useState, ChangeEvent, FormEvent } from 'react';
import { updatedData, updateProfile } from "@/app/actions/profile"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"

export default  function page() {
  const {toast} = useToast()
  const [fromData, setFormData] = useState<updatedData>({
    firstName: '',
    lastName:'',
    age: undefined,
    phone: "",
    email: ''
  })

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));
  };

  //hanlding submit
  const handleSubmit = async () => {
    const res = await updateProfile(fromData)
    if(res?.success) {
      toast({
        description:'Profile updated Successfully'
      })
    }else{
      toast({
        description: 'Something Went Wrong'
      })
    }
  }

  return (
    <div className=" w-full mt-10 flex items-center justify-center">
            <Card className="w-full max-w-3xl">
      <Tabs defaultValue="profile" className=" mx-5 mt-3">
        <TabsList className="border-b flex gap-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Credentials</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">First Name</Label>
                <Input id="name" placeholder="Enter your name" name="firstName" onChange={handleChange} value={fromData.firstName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Last Name</Label>
                <Input id="name" placeholder="Enter your name" name="lastName" onChange={handleChange} value={fromData.lastName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" name="email" onChange={handleChange} value={fromData.email} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" name="phone" onChange={handleChange} value={fromData.phone} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="Enter your age" name="age" onChange={handleChange} value={fromData.age} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto" onClick={handleSubmit}>
              Save Changes
            </Button>
          </CardFooter>
        </TabsContent>
        <TabsContent value="security">
          <CardHeader>
            <CardTitle>Update Password</CardTitle>
            <CardDescription>Change your password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto">
              Update Password
            </Button>
          </CardFooter>
        </TabsContent>
        <TabsContent value="notifications">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Notify via Email</p>
                <p className="text-sm text-muted-foreground">Receive notifications by email</p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Notify via SMS</p>
                <p className="text-sm text-muted-foreground">Receive notifications by text message</p>
              </div>
              <Switch id="sms-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Notify via Call</p>
                <p className="text-sm text-muted-foreground">Receive notifications by phone call</p>
              </div>
              <Switch id="call-notifications" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto">
              Save Notification Settings
            </Button>
          </CardFooter>
        </TabsContent>
      </Tabs>
            </Card>
    </div>
  )
}