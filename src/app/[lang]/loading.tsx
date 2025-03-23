export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#000",
                zIndex: 2,
            }}
        >
            Loading...
        </div>
    );
}
