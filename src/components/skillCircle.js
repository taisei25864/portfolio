import React from 'react';

// export default function SkillCircle({language, borderColor, bgColor, textColor}) {
//   return (
//     <div className={`border-2 border-indigo-600 rounded-xl w-24 border-${borderColor} bg-${bgColor} text-${textColor} flex justify-center`}>
//       <p>{language}</p>
//     </div>
//   );
// }
export default function SkillCircle({language, borderColor, bgColor, textColor}) {
  const conbinedClassName=`border-4 rounded-xl ${borderColor} ${bgColor} w-24 flex justify-center`
  return (
    <div className={conbinedClassName}>
      <p>{language}</p>
    </div>
  );
}