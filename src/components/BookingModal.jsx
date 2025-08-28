import { useState } from 'react';
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BookingModal = ({ isOpen, onClose, packageName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
  });
  const [formError, setFormError] = useState({});
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (date) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Phone number should be 10 digits';
      isValid = false;
    }

    if (!formData.date) {
      errors.date = 'Please select a date';
      isValid = false;
    }

    setFormError(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log('Booking submitted:', formData);
      
      toast({
        title: "Appointment Scheduled",
        description: `Your appointment for ${packageName} has been booked for ${format(formData.date, 'PPPP')}. We'll contact you shortly.`,
      });
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: null,
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-healthcare-green">Book Appointment</h2>
          <p className="mb-4 text-gray-700">Package: <span className="font-semibold">{packageName}</span></p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={formError.name ? "border-red-500" : ""}
                />
                {formError.name && <p className="text-red-500 text-sm mt-1">{formError.name}</p>}
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={formError.email ? "border-red-500" : ""}
                />
                {formError.email && <p className="text-red-500 text-sm mt-1">{formError.email}</p>}
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={formError.phone ? "border-red-500" : ""}
                />
                {formError.phone && <p className="text-red-500 text-sm mt-1">{formError.phone}</p>}
              </div>
              
              <div>
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${formError.date ? "border-red-500" : ""}`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateSelect}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
                {formError.date && <p className="text-red-500 text-sm mt-1">{formError.date}</p>}
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="outline" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-healthcare-green hover:bg-healthcare-green-dark">
                Book Appointment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default BookingModal;