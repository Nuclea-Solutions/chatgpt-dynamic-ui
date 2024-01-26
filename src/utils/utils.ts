import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { customAlphabet } from 'nanoid';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// 15 character random string
export const nanoid = customAlphabet('0123456789', 16);
// export const nanoid = customAlphabet('1234567890', 20);
