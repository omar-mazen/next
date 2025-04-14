import Link from "next/link";

interface Job {
    title: string;
    description: string;
    location: string;
}

const CraftsmanListJob = ({ job }: { job: Job }) => {
    return (
        <Link href={`/`}>
            <div className="bg-secondary-background my-4 px-4 py-4 rounded-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h2 className="text-text-color font-bold mb-2">
                        {job.title}
                    </h2>
                    <p className="text-primary-color text-small">
                        {job.location}
                    </p>
                </div>
                <p className="w-[90%] text-medium text-secondary-text">
                    {job.description}
                </p>
            </div>
        </Link>
    );
};

export default CraftsmanListJob;
