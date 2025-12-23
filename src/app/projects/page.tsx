export default function Projects() {
    return (
        <section className="min-h-screen px-16 py-12">

            <div className="grid grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="space-y-10">
                        <div className="h-48 bg-gray-200 rounded-xl"></div>
                        <h3 className="font-semibold">Project</h3>
                        <p className="text-gray-500">Description of the project</p>
                        <p className="font-bold">$10.99</p>
                    </div>
                ))}
            </div>

        </section>
    );
}