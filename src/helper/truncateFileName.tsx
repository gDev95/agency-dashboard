export function truncateFileName(fileName: string, maxLength = 20) {
    if (fileName.length > maxLength) {
        const fileExtMatch = fileName.match(/\.(.*)/);
        const truncatedFileName = fileName.slice(0, maxLength - 5);

        if (fileExtMatch) {
            return `${truncatedFileName}[...]${fileExtMatch[0]}`;
        }

        return truncatedFileName;
    }

    return fileName;
}
