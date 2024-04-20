import { createContext, useEffect, useState } from 'react';

export const ShiftContext = createContext({});

export default function ShiftProvider({ children }) {
  const [userShifts, setUserShifts] = useState([]);

  function addShift(company, shift) {
    const { id, title, city, uf } = company;

    const existingCompany = userShifts.find((item) => item.company.id === id);

    if (existingCompany) {
      existingCompany.shifts.push(shift);
      setUserShifts([...userShifts]);
    } else {
      setUserShifts([
        ...userShifts,
        {
          company: {
            id,
            title,
            city,
            uf,
          },
          shifts: [shift],
        },
      ]);
    }
  }

  function removeShift(companyId, shiftId) {

    const updatedShifts = userShifts
      .map((company) => {
        if (company.company.id === companyId) {
          const updatedShifts = company.shifts.filter(
            (shift) => shift.id !== shiftId
          );
          if (updatedShifts.length === 0) {
            return null;
          } else {
            return { ...company, shifts: updatedShifts };
          }
        } else {
          return company;
        }
      })
      .filter(Boolean);

    setUserShifts(updatedShifts);
  }
  
  return (
    <ShiftContext.Provider value={{ userShifts, addShift, removeShift }}>
      {children}
    </ShiftContext.Provider>
  );
}
