// "use client";

// import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, Ref } from 'react';
// import JoditEditorReact from 'jodit-react';
// // Explicitly import types from 'jodit' - try both ESM and CommonJS paths if needed
// import type Jodit from 'jodit';
// import type Jodit from 'jodit/esm/jodit'; // UNCOMMENT THIS LINE IF ERRORS PERSIST AFTER THIS ATTEMPT

// // Define Config interface (as before) - make it more specific if needed based on error
// interface Config {
//     readonly?: boolean;
//     height?: number;
//     // ... Add other config options you use extensively, e.g., toolbar, buttons, plugins
//     toolbar?: boolean; // Added toolbar as it's often configured
//     buttons?: string[] | false; // Added buttons, common config
//     extraButtons?: any; // Added extraButtons - VERY broad type to try to bypass the error temporarily
// }

// export interface JoditEditorProps {
//     value: string;
//     onChange: (content: string) => void;
//     config?: Config;
// }

// const JoditEditor = forwardRef<Jodit, JoditEditorProps>(({ value, onChange, config }, ref) => {
//     const editorRef = useRef<Jodit | null>(null);
//     const [content, setContent] = useState(value);

//     useImperativeHandle(ref, () => editorRef.current as Jodit);

//     useEffect(() => {
//         setContent(value);
//     }, [value]);

//     const handleOnChange = (newContent: string) => {
//         setContent(newContent);
//         onChange(newContent);
//     };

//     const editorConfig: Config = config || {
//         readonly: false,
//         height: 400,
//         toolbar: true, // Example: explicitly set toolbar
//         buttons: ["bold", "italic", "link"], // Example: some basic buttons
//         extraButtons: [], // Initialize extraButtons to an empty array for now
//     };

//     return (
//         <JoditEditorReact
//             ref={editorRef as Ref<Jodit>} // Ref type assertion
//             value={content}
//             config={editorConfig as any} //Config type assertion - as any to bypass temporarily
//             tabIndex={1}
//             onBlur={(newContent) => handleOnChange(newContent)}
//             onChange={() => {}}
//         />
//     );
// });

// JoditEditor.displayName = 'JoditEditor';

// export default JoditEditor;