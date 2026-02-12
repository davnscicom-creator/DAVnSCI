"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, Download, BookOpen } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    serviceType: "",
    projectDetails: "",
    timeline: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">Book Your Consultation</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Ready to turn your complex data into clear insights? Let's discuss your project and explore how we can help
            you achieve your research goals with our proven approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Data Transformation</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll provide a customized solution proposal within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Dr. John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john.smith@university.edu"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      placeholder="University of Kerala / Research Institute / Startup / FPO"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Primary Service Needed *</Label>
                      <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="data-analysis">Data Analysis & Insights</SelectItem>
                          <SelectItem value="data-visualization">Data Visualization & Dashboards</SelectItem>
                          <SelectItem value="data-communication">Research Communication</SelectItem>
                          <SelectItem value="training">Training & Capacity Building</SelectItem>
                          <SelectItem value="comprehensive">Comprehensive Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                          <SelectItem value="standard">Standard (30 days)</SelectItem>
                          <SelectItem value="extended">Extended (3+ months)</SelectItem>
                          <SelectItem value="ongoing">Ongoing Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDetails">Project Details *</Label>
                    <Textarea
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                      placeholder="Please describe your data challenges, research objectives, and any specific requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Book Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Office Location</div>
                    <div className="text-sm text-muted-foreground">
                      First floor, Skyways Building
                      <br />
                      Pottakuzhy, Pattom
                      <br />
                      Thiruvananthapuram
                      <br />
                      Kerala - 673009, INDIA
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">
                      <a href="mailto:info@davnsci.co.in" className="hover:text-primary">
                        info@davnsci.co.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">
                      <a href="tel:+919495982747" className="hover:text-primary">
                        +919495982747
                      </a>
                      <br />
                      <a href="tel:+919567982747" className="hover:text-primary">
                        +919567982747
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM IST
                      <br />
                      Sat: 10:00 AM - 2:00 PM IST
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Quick Response Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Initial response within 4 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Detailed proposal within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Free consultation call available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Alternative Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Courses
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Publications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
