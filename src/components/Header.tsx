import React from 'react';
import { Trophy, Users, Award } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold">مسابقه المولد النبوي الشريف بالجامع الشرقي</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            نتائج مسابقه القران الكريم بالجامع الشرقي لعام 2025
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span>مشاركون من جميع المراحل</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span>جوائز قيمة للفائزين</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};