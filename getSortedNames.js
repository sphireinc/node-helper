export const getSortedNames = (connections)=>  {
    if (!connections) {return ""}

    return connections
        .map(conn => `${conn.name} (${conn.connectionId})`)
        .sort()
        .join(', ');
}