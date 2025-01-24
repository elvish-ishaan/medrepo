
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Highlighted from "@/components/Highlighted"
import { useRouter } from 'next/navigation';
import Image from "next/image"

export default function page() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  
  const doctors = [
    {
      id: 1,
      name: "Dr. Emily Wilkins",
      photo: "/placeholder.svg",
      specialty: "Pediatrics",
      fee: 150,
    },
    {
      id: 2,
      name: "Dr. Michael Johnson",
      photo: "/placeholder.svg",
      specialty: "Cardiology",
      fee: 300,
    },
    {
      id: 3,
      name: "Dr. Sarah Lee",
      photo: "/placeholder.svg",
      specialty: "Dermatology",
      fee: 200,
    },
    {
      id: 4,
      name: "Dr. David Patel",
      photo: "/placeholder.svg",
      specialty: "Orthopedics",
      fee: 250,
    },
    {
      id: 5,
      name: "Dr. Olivia Nguyen",
      photo: "/placeholder.svg",
      specialty: "Psychiatry",
      fee: 180,
    },
    {
      id: 6,
      name: "Dr. Liam Gonzalez",
      photo: "/placeholder.svg",
      specialty: "Neurology",
      fee: 320,
    },
    {
      id: 7,
      name: "Dr. Sophia Tanaka",
      photo: "/placeholder.svg",
      specialty: "Obstetrics and Gynecology",
      fee: 275,
    },
    {
      id: 8,
      name: "Dr. Noah Sharma",
      photo: "/placeholder.svg",
      specialty: "Gastroenterology",
      fee: 225,
    },
  ]
  const filteredDoctors = useMemo(() => {
    return doctors
      .filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .sort((a, b) => {
        if (sortBy === "name") {
          return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        } else {
          return sortOrder === "asc" ? a.fee - b.fee : b.fee - a.fee
        }
      })
  }, [searchTerm, sortBy, sortOrder])
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Find a <Highlighted text="doctor" size="text-3xl"/> of your choice</h1>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search by name or specialty"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ListOrderedIcon className="h-5 w-5" />
                <span>Sort by</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="fee">Fee</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="flex flex-col">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src="/placeholder.svg"
                alt={doctor.name}
                width={400}
                height={300}
                className="h-full w-full object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
            <CardContent className="flex-1 p-4">
              <div className="mb-2 text-lg font-bold">{doctor.name}</div>
              <div className="mb-4 text-sm text-muted-foreground">{doctor.specialty}</div>
              <div className="mb-4 text-2xl font-bold">${doctor.fee}</div>
              <Button onClick={() => router.push(`/appointments/doctors/${doctor.id}`)} className="w-full">Book Appointment</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ListOrderedIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}