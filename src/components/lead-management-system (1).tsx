import React, { useState } from 'react';
import { 
  Bell, Search, Filter, MoreVertical, PhoneCall, 
  Mail, Calendar, ChevronRight, PieChart, Users, 
  FileText, Settings, Plus, ArrowUp, ArrowDown,
  Activity, DollarSign, MessageCircle, Clock,
  Map, Phone
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, BarChart, Bar, PieChart as RePieChart,
  Pie, Cell
} from 'recharts';

// Rest of the code remains the same, but replacing CalendarIcon with Calendar
const LeadManagementSystem = () => {
  const [activeScreen, setActiveScreen] = useState('lead-details');
  const [activeTab, setActiveTab] = useState('info');
  
  // Sample data for charts
  const leadTrendData = [
    { name: 'Jan', leads: 65 },
    { name: 'Feb', leads: 75 },
    { name: 'Mar', leads: 85 },
    { name: 'Apr', leads: 82 },
    { name: 'May', leads: 90 },
    { name: 'Jun', leads: 95 }
  ];

  const sourceData = [
    { name: 'Facebook', value: 400 },
    { name: 'Website', value: 300 },
    { name: 'Google', value: 200 },
    { name: 'Referral', value: 100 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const activities = [
    { type: 'Call', date: '2024-12-19 14:30', notes: 'Discussed SUV options' },
    { type: 'Email', date: '2024-12-18 10:15', notes: 'Sent price quotation' },
    { type: 'Meeting', date: '2024-12-17 15:00', notes: 'Test drive scheduled' }
  ];

  const leadDetails = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 555-0123",
    address: "123 Main St, City, State",
    source: "Facebook",
    status: "Interested",
    interest: "SUV Models",
    budget: "$35,000 - $45,000",
    assignedTo: "Sarah Connor",
    lastContact: "2024-12-19",
    nextFollowUp: "2024-12-21"
  };

  const renderLeadDetails = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Lead Details</h2>
          <p className="text-gray-500">ID: #LD-2024-001</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </button>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg">
            <Mail className="w-4 h-4 mr-2" />
            Email
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Left column - Main info */}
        <div className="flex-1">
          <div className="bg-white rounded-lg border p-6 mb-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-gray-500 text-sm">Full Name</label>
                <p className="font-medium">{leadDetails.name}</p>
              </div>
              <div>
                <label className="text-gray-500 text-sm">Email</label>
                <p className="font-medium">{leadDetails.email}</p>
              </div>
              <div>
                <label className="text-gray-500 text-sm">Phone</label>
                <p className="font-medium">{leadDetails.phone}</p>
              </div>
              <div>
                <label className="text-gray-500 text-sm">Address</label>
                <p className="font-medium">{leadDetails.address}</p>
              </div>
              <div>
                <label className="text-gray-500 text-sm">Interest</label>
                <p className="font-medium">{leadDetails.interest}</p>
              </div>
              <div>
                <label className="text-gray-500 text-sm">Budget</label>
                <p className="font-medium">{leadDetails.budget}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">Activity Timeline</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    {activity.type === 'Call' ? (
                      <Phone className="w-4 h-4 text-blue-600" />
                    ) : activity.type === 'Email' ? (
                      <Mail className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Calendar className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{activity.type}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                    <p className="text-sm">{activity.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Status and Timeline */}
        <div className="w-80">
          <div className="bg-white rounded-lg border p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Lead Status</h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray-500 text-sm">Current Status</label>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">
                  {leadDetails.status}
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-sm">Source</label>
                <p className="font-medium">{leadDetails.source}</p>
              </div>
              <div>
                <label className="text-gray-500 text-sm">Assigned To</label>
                <p className="font-medium">{leadDetails.assignedTo}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">Follow-up</h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray-500 text-sm">Last Contact</label>
                <p className="font-medium">{leadDetails.lastContact}</p>
              </div>
              <div>
                <label className="text-gray-500 text-sm">Next Follow-up</label>
                <p className="font-medium">{leadDetails.nextFollowUp}</p>
              </div>
              <button className="w-full bg-blue-50 text-blue-600 px-4 py-2 rounded-lg mt-2">
                Schedule Follow-up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Conversion Rate</h3>
            <ArrowUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold mt-2">24.8%</p>
          <span className="text-green-500 text-sm">+2.5% vs last month</span>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Avg Response Time</h3>
            <ArrowDown className="w-4 h-4 text-red-500" />
          </div>
          <p className="text-2xl font-bold mt-2">2.4 hrs</p>
          <span className="text-red-500 text-sm">+0.3 hrs vs last month</span>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Total Leads</h3>
            <ArrowUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold mt-2">847</p>
          <span className="text-green-500 text-sm">+12% vs last month</span>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Qualified Leads</h3>
            <ArrowUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold mt-2">324</p>
          <span className="text-green-500 text-sm">+8% vs last month</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Lead Trend</h3>
          <LineChart width={500} height={300} data={leadTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="leads" stroke="#8884d8" />
          </LineChart>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Lead Sources</h3>
          <RePieChart width={500} height={300}>
            <Pie
              data={sourceData}
              cx={250}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {sourceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RePieChart>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">HSR Motors CRM</h1>
        </div>
        <nav className="p-4">
          <button 
            onClick={() => setActiveScreen('dashboard')}
            className={`flex items-center w-full p-2 rounded-lg mb-2 ${
              activeScreen === 'dashboard' ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <PieChart className="w-5 h-5 mr-3" />
            Dashboard
          </button>
          <button 
            onClick={() => setActiveScreen('leads')}
            className={`flex items-center w-full p-2 rounded-lg mb-2 ${
              activeScreen === 'leads' ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            Leads
          </button>
          <button 
            onClick={() => setActiveScreen('reports')}
            className={`flex items-center w-full p-2 rounded-lg mb-2 ${
              activeScreen === 'reports' ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <Activity className="w-5 h-5 mr-3" />
            Reports
          </button>
          <button className="flex items-center w-full p-2 rounded-lg">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  JS
                </div>
                <span className="font-medium">John Smith</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          {activeScreen === 'lead-details' && renderLeadDetails()}
          {activeScreen === 'reports' && renderReports()}
        </main>
      </div>
    </div>
  );
};

export default LeadManagementSystem;