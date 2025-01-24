"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Calendar } from '../ui/calendar';
import { getHealthGrpData } from '@/app/actions/allReports';

const DalUpCalender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [uploadedDates, setUploadedDates] = useState<Date[]>([]);

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const response = await getHealthGrpData();
        if (response.success) {
          // Extract health upload dates as Date objects
          const healthDates = response.healthGrpData?.map((item: { healthMonth: number, yearValue: number, healthDay: number }) => {
            return new Date(item.yearValue, item.healthMonth - 1, item.healthDay);
          });
          setUploadedDates(healthDates || []);
        } else {
          console.error('Failed to fetch health data');
        }
      } catch (error) {
        console.error('Error fetching health group data:', error);
      }
    };

    fetchHealthData();
  }, []);

  // Create a function to determine if a date has been uploaded
  const isUploadedDate = (date: Date) => {
    return uploadedDates.some(uploadedDate => 
      uploadedDate.getFullYear() === date.getFullYear() &&
      uploadedDate.getMonth() === date.getMonth() &&
      uploadedDate.getDate() === date.getDate()
    );
  };

  // Get today's date for comparison
const today = new Date();
// Set modifiers based on the uploaded dates and today's date
const modifiers = {
  uploaded: uploadedDates,
  notUploaded: (date: Date) => !isUploadedDate(date) && date <= today, // Check if date is not uploaded and is past or today
  future: (date: Date) => date > today // Future dates
};

  return (
    <div className="w-full">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Daily Uploads</CardTitle>
          <CardDescription>Track your health check uploads</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border gap-2 ml-5"
            modifiers={modifiers}
            modifiersStyles={{
              uploaded: { backgroundColor: '#22c55e', color: '#064e3b', fontWeight: 'bold' },
              notUploaded: { backgroundColor: '#D91656', color: '#000000' }, 
              future: {} 
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default DalUpCalender;
