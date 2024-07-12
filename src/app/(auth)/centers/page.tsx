// page.tsx

"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import NextAuthSessionProvider from "../../provider/sessionProvider";

interface Center {
  address: string;
  day: string;
  time: string;
  contactPersons: string;
  contactNumbers: string;
}

const centers: Center[] = [
    {
        address: "Sahaja Yoga Dhyan Kendra, Devi Ganj Road, Narayan Store Ke Upar, Infront of Chitra Mandir Takies,AMbikapur (C.G.)",
        day: "Sunday",
        time: "5:30PM",
        contactPersons: "Shri Shekhar Biswas, Shri Mahendra Gupta",
        contactNumbers: "9009999875, 9425254685",
    },
    {
        address: "Nishad Bhavan, Dalli Rajhara, Jila- Balod",
        day: "Sunday",
        time: "10:00AM",
        contactPersons: "",
        contactNumbers: "8982066964, 8817244219",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Joga Para, Bacheli (C.G.)",
        day: "Sunday",
        time: "5:00PM",
        contactPersons: "Shri Y.R.Patel, Shri P Prabhakar",
        contactNumbers: "9406312132, 6268585501",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Saraswati Sishu Mandir, Nehru Nagar (East), Bhilai (C.G.)",
        day: "Sunday",
        time: "9:30AM",
        contactPersons: "Shri B K Pal, Neelam Singh",
        contactNumbers: "9977251010, 8817772677",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Frontier Cultural Bhawan, Near MGM School, Sector-6, Bhilai (C.G.)",
        day: "Tuesday",
        time: "7:00PM",
        contactPersons: "Shri Vinay Thakre",
        contactNumbers: "9407985225",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Hanuman Mandir, Near Sagam Dairy, Maitri Nagar, Bhilai (C.G.)",
        day: "Sunday",
        time: "10:00AM",
        contactPersons: "Smt. Meena Rajak, Shri Ashish Thakur",
        contactNumbers: "8602821577, 9893950394",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Devakinandan Girls School, Near Pratap Talkies, Bilaspur (C.G.)",
        day: "Sunday",
        time: "5:30PM",
        contactPersons: "Smt. D Surya Prabha, Shri Rahul Tolani",
        contactNumbers: "9406248564, 9179883996",
    },
    {
        address: "SECL, Basant Vihar, Basant Club, Bilaspur (C.G.) (Temporarily Closed)",
        day: "Thursday",
        time: "6:00PM",
        contactPersons: "Shri Sushil Khatkar, Shri Dushyant Sahu",
        contactNumbers: "9755512250, 9425531699",
    },
    {
        address: "Gyanam Palace, Sarju Bagicha, Telipara, Bilaspur (C.G.) (Temporarily Closed)",
        day: "Sunday",
        time: "8:00AM",
        contactPersons: "Shri Nirmal Motwani, Shri S N Sharma",
        contactNumbers: "9039355466, 9827972828",
    },
    {
        address: "Lagra Bilaspur (C.G.)",
        day: "Saturday",
        time: "7:30AM",
        contactPersons: "Shri S N Sharma, Shri Shatrugan Suryavanshi",
        contactNumbers: "9770512531, 9827972828",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Saraswati Sishu Mandir School, Kumhar Para, Dongargarh (C.G.)",
        day: "Sunday",
        time: "4:00PM",
        contactPersons: "Smt. Radha Gupta, Smt. Aswini Sawarkar",
        contactNumbers: "7000410700, 7771989848",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Gurunanak Prathmik Shala, Raipur Naka, Durg (C.G.)",
        day: "Saturday",
        time: "6:00PM",
        contactPersons: "Smt. Usha Agrawal, Smt. Vandana Lahiri",
        contactNumbers: "9302838711, 7999893817",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Govt. Primary School, Near Rly Crossing, Borsibhata, Borsi, Durg (C.G.)",
        day: "Sunday",
        time: "5:00PM",
        contactPersons: "Shri Rakesh Kumar Sahu, Shri Jitendra Singh Mourya",
        contactNumbers: "9644461766, 9300910294",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Saraay School, Jhoolelal Market, Gol Bazar, Dhamtari (C.G.)",
        day: "Sunday",
        time: "9:30AM",
        contactPersons: "Shri Dilip Adani, Shri Deepak Kamde",
        contactNumbers: "9977963410, 9630527068",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Shri Ram Mandir, Awrabhata, Near Railway Crossing, Dantewada (C.G.)",
        day: "Sunday",
        time: "5:00PM",
        contactPersons: "Shri Rajendra Thakur, Smt. Anita Choudhary",
        contactNumbers: "7587254377, 9981677761",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Govt. Karamchari Bhavan, Gharghoda, Raigarh (C.G.)",
        day: "Sunday",
        time: "3:00PM",
        contactPersons: "",
        contactNumbers: "8120936313, 9302036141",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Aagan Badi Kendra, Near Atal Chowk, Dabhra, Jila-Sakti (C.G.)",
        day: "Sunday",
        time: "8:30AM",
        contactPersons: "Shri Thakur Ram Bareth, Shri Mohan Sahu",
        contactNumbers: "8817771464, 9303392174",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Govt. Girls School, Near Girls College, Jashpur Nagar (C.G.)",
        day: "Sunday",
        time: "10:00AM",
        contactPersons: "Smt. Kiran Singh, Smt. Palvi Singh",
        contactNumbers: "9425275544, 7898446333",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Nagar Palika Nigam, Karamchari Bhavan, Near Nirmal Vidyalaya, Jagdalpur (C.G.)",
        day: "Sunday",
        time: "10:00AM",
        contactPersons: "Smt. Nirmala Das, Shri Ghanshyam Upadhyay",
        contactNumbers: "9826482357, 9407927413",
    },
    {
        address: "Village- Bhandar, Bhandha Tola, Tehsil- Bodha, Dist- Kabirdham (Kawardha) (C.G.)",
        day: "Sunday",
        time: "9:00AM",
        contactPersons: "Shri Bageshwar Shriwas, Shri Narendra Rao Ganvir",
        contactNumbers: "9131736941, 7389716797",
    },
    {
        address: "Aganbadi Kendra, NearAMbedkar Park, Kirandul (C.G.)",
        day: "Wednesday",
        time: "4:30PM",
        contactPersons: "Shri Simanchal Patnaik, Shri Harendra Nag",
        contactNumbers: "9425594946, 9479285304",
    },
    {
        address: "Pandit Mukutdhar Pandey Sahitya Bhavan, Shyam Sadan ke Pass, Ghantaghar Chowk, Korba (C.G.)",
        day: "Sunday",
        time: "10:00AM",
        contactPersons: "Smt. Mona Ingle, Shri Himanshu",
        contactNumbers: "9981442760, 8349201157",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Indira Nagar, Behind New Hospital, Lailunga, Raigarh (C.G.)",
        day: "Sunday",
        time: "10:30AM",
        contactPersons: "Shri Jitendra Patnayak, Shri Vikram Chouhan",
        contactNumbers: "9993313034, 8103049546",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Kaushal Prashikshan Kendra, Purana Pratmik Shala, Infront of Pani Tanki, Bus Stand, Manendragarh, Koriya (C.G.)",
        day: "Sunday",
        time: "10:00AM",
        contactPersons: "Shri Govind Prasad Verma, Ku. Rakhi Verma",
        contactNumbers: "9300617106, 9752553777",
    },
    {
        address: "Brahman Samaj Bhawa, Behind Kaushilya Garden, Pathharra Road, Rajim, Gariaband (C.G.)",
        day: "Sunday",
        time: "4:00PM",
        contactPersons: "Smt. Parmeshwari Sahu, Dr. Ram Gopal Yadu",
        contactNumbers: "7974931918, 7974821743",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Kasturba Mahila Mandal School, Near Railway Station, Rajnandgaon (C.G.)",
        day: "Sunday",
        time: "10:00AM",
        contactPersons: "Smt. Kanchan Choubey, Shri Naveen Parmar",
        contactNumbers: "7489989691, 9589757776",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Sanskritik Bhawan, Sector- 1, Near Axis Juice Corner, Devendra Nagar, Raipur (C.G.)",
        day: "Thursday",
        time: "5:00PM",
        contactPersons: "Smt. Usha Nanwani, Smt. Anita Gyanchandani",
        contactNumbers: "9301323249, 9827899964",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Bapu Ki Kutiya, Near Seyan Sadan, Tilak Nagar, Gudhiyari, Raipur (C.G.)",
        day: "Saturday",
        time: "5:00PM",
        contactPersons: "Smt. T Lata Rao, Dr. Rashmi Dewangan",
        contactNumbers: "9406047776, 9827978479",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Sarswati Shishu mandir, Rohanipuram, Raipur (C.G.)",
        day: "Saturday",
        time: "4:00PM",
        contactPersons: "Shri Col. K.L.Yadav, Smt. Rama Yadav",
        contactNumbers: "9425511950, 8602967778",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Sindhi School, Ramsagarpara, Raipur (C.G.)",
        day: "Sunday",
        time: "8:30AM",
        contactPersons: "Shri Murli Manohar Kalla, Shri Ravi Grover",
        contactNumbers: "9039859661, 8319585280",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Chaitanya Nagar, Krishna Shopping Mall Lower Ground Floor (HDFC Bank ke niche), Dhimrapur Road, Raigarh (C.G.)",
        day: "Sunday",
        time: "9:00AM",
        contactPersons: "",
        contactNumbers: "6263341942, 9131365821",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Govt. Primery School, Jamgaon Station, Raigarh (C.G.)",
        day: "Thursday",
        time: "4:30PM",
        contactPersons: "ShriAMrtilal Himdhar, Shri Ashish Himdhar",
        contactNumbers: "8120489005, 7509268279",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Adhariya Samaj Bhavan, Near Govt. High School, Lailunga, Raigarh (C.G.)",
        day: "Sunday",
        time: "11:00AM",
        contactPersons: "Shri Vikram Chouhan",
        contactNumbers: "6264490340, 8103049546",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Samudayik Bhavan, Chaple Robertson, Raigarh (C.G.)",
        day: "Sunday",
        time: "4:00PM",
        contactPersons: "Shri Osram Patel, Shri Vishnu Patel",
        contactNumbers: "8878937449, 9522176399",
    },
    {
        address: "Sahaja Yoga Dhyan Kendra, Ram Janki Chote Mandir, Takhatpur, Bilaspur (C.G.)",
        day: "Sunday",
        time: "6:30AM",
        contactPersons: "Shri Vinod Tolani, Shri Satish Madhani",
        contactNumbers: "9893809164, 9893339451",
    },
];
  

const AdminForm: React.FC = () => {
  const [formData, setFormData] = useState<Center>({
    address: "",
    day: "",
    time: "",
    contactPersons: "",
    contactNumbers: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API, update state, etc.)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form mb-8">
      <h2 className="form-title mb-4">Add New Center</h2>
      <label className="block mb-2">
        Address:
        <textarea name="address" value={formData.address} onChange={handleChange} required className="w-full p-2 border rounded"/>
      </label>
      <label className="block mb-2">
        Day:
        <input type="text" name="day" value={formData.day} onChange={handleChange} required className="w-full p-2 border rounded"/>
      </label>
      <label className="block mb-2">
        Time:
        <input type="text" name="time" value={formData.time} onChange={handleChange} required className="w-full p-2 border rounded"/>
      </label>
      <label className="block mb-2">
        Contact Persons:
        <input type="text" name="contactPersons" value={formData.contactPersons} onChange={handleChange} required className="w-full p-2 border rounded"/>
      </label>
      <label className="block mb-2">
        Contact Numbers:
        <input type="text" name="contactNumbers" value={formData.contactNumbers} onChange={handleChange} required className="w-full p-2 border rounded"/>
      </label>
      <button type="submit" className="p-2 bg-green-700 text-white rounded">Submit</button>
    </form>
  );
};

const CentersTable: React.FC = () => (
    <div className="overflow-x-auto mx-4 lg:mx-6">
      <h1 className="text-4xl text-green-700 font-bold text-center mb-8">Do Visit Us 😇</h1>
      <div className="border-4 border-green-700 rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 text-left text-white">Address</th>
              <th className="p-2 text-left text-white">Day</th>
              <th className="p-2 text-left text-white">Time</th>
              <th className="p-2 text-left text-white">Contact Person</th>
              <th className="p-2 text-left text-white">Contact No.</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white text-gray-50 regular' : 'bg-green-700 text-white'}>
                <td className="p-2">{center.address}</td>
                <td className="p-2">{center.day}</td>
                <td className="p-2">{center.time}</td>
                <td className="p-2">{center.contactPersons}</td>
                <td className="p-2">{center.contactNumbers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center">
        <p className="text-2xl font-bold text-green-700 mb-4">IT'S ALWAYS FREE!</p>
        <p className="text-lg">
          If you want to find centers apart from Chhattisgarh state, please find them{' '}
          <a 
            href="https://sycenters.org/centers" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            here
          </a>
        </p>
      </div>
      <hr className="m-10"></hr>
    </div>
  );

const Page: React.FC = () => {
  const { data: session } = useSession();

  return (
    <NextAuthSessionProvider>
      <div className="page-container pb-6  lg:px-20">
        {session && session.user && session.user.email === "admin@example.com" && <AdminForm />}
        <CentersTable />
      </div>
    </NextAuthSessionProvider>
  );
};

export default Page;
