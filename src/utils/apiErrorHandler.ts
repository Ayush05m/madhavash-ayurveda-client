export interface ApiError {
    success: boolean;
    message: string;
    error?: any;
}

export const getErrorMessage = (error: any): string => {
    if (error.response?.data?.message) {
        return error.response.data.message;
    }
    
    if (error.message) {
        return error.message;
    }
    
    return 'An unexpected error occurred';
}; 