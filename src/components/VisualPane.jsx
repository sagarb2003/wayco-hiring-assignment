import { Star, Heart, Building, Info } from "lucide-react";

const DefaultVisual = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg">
            <div className="w-64 h-64 mb-8 transform hover:scale-105 transition-transform duration-300">
                <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/man-greeting-saying-namaste-with-his-hands-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--doing-welcome-say-presentation-pack-people-illustrations-5686259.png"
                    alt="Travel Guide Avatar"
                    className="w-full h-full object-contain"
                />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Welcome to Your Travel Journey!
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl leading-relaxed px-4 animate-fade-in">
                I'm your personal travel companion, ready to help you discover amazing destinations tailored to your preferences. Let's explore the world together through our interactive chat and find your perfect adventure!
            </p>
            <div className="mt-8 flex gap-3">
                <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium">
                    🌍 Explore Destinations
                </div>
                <div className="px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-medium">
                    💬 Start Chat
                </div>
            </div>
        </div>
    );
};

const TokyoVisual = () => (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
        <div className="h-[55vh]">
            <img
                className="h-full w-full object-cover rounded-lg"
                src="https://imgs.search.brave.com/SYLKThhak7F2sETYcsRO4Cj_f6yQeO0I5374-O9EOHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MWEvYzQvYzMvYTcv/c2hpYnV5YS5qcGc"
                alt="tokyo-image"
            />
        </div>
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-2">Tokyo</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
                <div className="flex items-center">
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <span className="ml-1 font-semibold">4.7</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>202k reviews</span>
                <span className="text-gray-400">•</span>
                <span>Shibuya , Tokyo</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 mb-3">
                <Building className="h-4 w-4" />
                <p className="text-sm">Attraction</p>
            </div>
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-1">
                    <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <Heart className="h-4 w-4 text-red-500 fill-current mr-1" />
                        <span className="font-semibold">69</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white text-xs">S</div>
                        <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-white text-xs">D</div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Sagar,Dhruv and 3 others mentioned this place</span>
                </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-2 mb-3">
                    <Info className="h-5 w-5 text-blue-500" />
                    <h2 className="text-xl font-semibold">Overview</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Go-karting in Shibuya is an exciting and unique way to explore the vibrant streets of Tokyo. Dressed in fun character costumes, you can drive past iconic spots like Shibuya Crossing and Harajuku. It's a thrilling adventure that blends sightseeing with high-energy fun. Perfect for first-time visitors, this activity offers an unforgettable experience. Just make sure to carry a valid International Driving Permit to join the ride legally and safely.
                </p>
            </div>
        </div>
    </div>
);

const KyotoVisual = () => (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
        <div className="h-[55vh]">
            <img
                className="h-full w-full object-cover rounded-lg"
                src="https://imgs.search.brave.com/CKYFTo1dXGLvRhqQ-dNSSMPo08Z1mquIISHZEqp_SyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMmo1/N2JwN3dkenRjNy5j/bG91ZGZyb250Lm5l/dC9wYWdlcy9pbWFn/ZXMvdGVhLWNlcmVt/b255L3RlYS1jZXJl/bW9ueS1naW9uLTAy/LmpwZw"
                alt="kyoto-image"
            />
        </div>
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-2">Kyoto</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
                <div className="flex items-center">
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <span className="ml-1 font-semibold">4.9</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>180k reviews</span>
                <span className="text-gray-400">•</span>
                <span>Gion, Kyoto</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 mb-3">
                <Building className="h-4 w-4" />
                <p className="text-sm">Cultural Site</p>
            </div>
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-1">
                    <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                        <Heart className="h-4 w-4 text-red-500 fill-current mr-1" />
                        <span className="font-semibold">82</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white text-xs">S</div>
                        <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-white text-xs">D</div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Sagar,Dhruv and 5 others mentioned this place</span>
                </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-2 mb-3">
                    <Info className="h-5 w-5 text-blue-500" />
                    <h2 className="text-xl font-semibold">Overview</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Experience the essence of traditional Japanese culture through an authentic tea ceremony in Kyoto's historic Gion district. Led by experienced tea masters, this intimate ceremony takes place in a centuries-old teahouse, where you'll learn about the rich history and precise rituals of this ancient practice. The serene atmosphere and detailed explanations make this cultural experience truly unforgettable.
                </p>
            </div>
        </div>
    </div>
);

export const VisualPane = ({ destination }) => {
    if (!destination) {
        return <DefaultVisual />;
    }
    if (destination === 'Tokyo') {
        return <TokyoVisual />;
    }
    if (destination === 'Kyoto') {
        return <KyotoVisual />;
    }
    return <DefaultVisual />;
}
