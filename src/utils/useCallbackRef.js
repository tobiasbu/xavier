import { useState } from 'react';

// https://github.com/react-restart/hooks/blob/master/src/useCallbackRef.ts
export default function useCallbackRef(ref) {
  return useState(ref || null);
}
