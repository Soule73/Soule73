export const Input = ({ label, icon, name, isTextarea = false, required, id, placeholder, type = 'text', value, onChange, error }: {
    label: string;
    icon?: React.ReactNode;
    name: string;
    required?: boolean;
    isTextarea?: boolean;
    id?: string;
    placeholder?: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
}) => {
    return (
        <div className="group">
            <label htmlFor={name} className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                <span className="flex items-center space-x-2">
                    {icon && icon}
                    <span>{label}</span>
                </span>
            </label>
            {isTextarea ?
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={4}
                    className={`w-full px-4 py-4 glass dark:glass-dark rounded-2xl border-0 focus:ring-2 transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder:text-gray-500 resize-none ${error
                        ? 'focus:ring-red-500 ring-2 ring-red-500'
                        : 'focus:ring-indigo-500'}`}
                    placeholder={placeholder}
                ></textarea>
                : <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`w-full px-4 py-4 glass dark:glass-dark rounded-2xl border-0 focus:ring-2 transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder:text-gray-500 ${error
                        ? 'focus:ring-red-500 ring-2 ring-red-500'
                        : 'focus:ring-indigo-500'}`}
                    placeholder={placeholder} />}
            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                    {error}
                </p>
            )}
        </div>
    );

};
