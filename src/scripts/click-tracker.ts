interface ClickData {
    timestamp: string;
    x: number;
    y: number;
}

// Transfer to database
const clicksData: ClickData[] = []

export function clickTracker(event: MouseEvent) {
    const clickData = {
        timestamp: new Date().toISOString(),
        x: event.clientX,
        y: event.clientY
    };

    clicksData.push(clickData);
}

export function exportClicksData() {
    let csvContent = "Timestamp,X,Y\n";
    clicksData.forEach(click => {
        csvContent += `${click.timestamp},${click.x},${click.y}\n`;
    });

    const blob = new Blob([csvContent], { type: 'data:text/csv;charset=utf-8' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `${new Date().toISOString()}_clicks.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}