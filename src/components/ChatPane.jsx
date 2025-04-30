import { useState } from 'react';
import { Send, MapPin} from 'lucide-react';

const BotMessage = ({ message }) => (
    <div className="flex gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 text-sm font-semibold">AI</span>
        </div>
        <div className="flex-1">
            <div className="bg-gray-100 rounded-lg p-3 inline-block max-w-[80%]">
                <p className="text-gray-800 whitespace-pre-line">{message}</p>
            </div>
        </div>
    </div>
);

const UserMessage = ({ message }) => (
    <div className="flex flex-row-reverse gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 text-sm font-semibold">U</span>
        </div>
        <div className="flex-1 flex justify-end">
            <div className="bg-blue-600 text-white rounded-lg p-3 inline-block max-w-[80%]">
                <p className="whitespace-pre-line">{message}</p>
            </div>
        </div>
    </div>
);

export const ChatPane = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [destination, setDestination] = useState('');
    const [stage, setStage] = useState(0);

    const initialMessage = "Hi! I'm your travel buddy 😄\n\nBased on your interests in adventure, culture, and history, I have 2 awesome activity suggestions:\n\nTokyo: 🏎️ Go-Karting in Shibuya at night (Adventure + Fun!)\nKyoto: 🍵 Traditional Tea Ceremony in a historic Gion teahouse (Culture + History!)\n\nWhich one sounds more exciting to you?\nEnter 1 for Tokyo, 2 for Kyoto";

    const tokyoItinerary = `Awesome! Here's a recommended 4-day itinerary 🌏:\n\nDay 1:\n✈️ Arrive Tokyo, explore Shibuya Crossing 🏙️, enjoy Go-Karting 🏎️🎌\n\nDay 2:\n🛕 Visit Asakusa Temple, Tokyo Skytree 🗼, shop Akihabara 🛍️🎮\n\nDay 3:\n🚅 Travel Kyoto, explore Fushimi Inari Shrine ⛩️, tea ceremony 🍵\n\nDay 4:\n🎋 Arashiyama Bamboo Grove, visit Kinkaku-ji 🏯, return Tokyo 🧳\n\nWould you like to confirm these activities for your trip?\nPress 1 for confirm or 2 for cancel`;

    const kyotoItinerary = `Perfect choice! Here's a recommended 4-day itinerary 🌏:\n\nDay 1:\n🚅 Arrive Kyoto, visit Kiyomizu-dera Temple 🛕, stroll Higashiyama streets\n\nDay 2:\n⛩️ Explore Fushimi Inari Shrine, hike torii trail, taste local sweets\n\nDay 3:\n🌸 Visit Arashiyama Bamboo Grove 🎋, see monkeys 🐒, relax by river\n\nDay 4:\n🍵 Tea Ceremony in Gion teahouse 🎐, explore Nishiki Market 🍱🛍️\n\nWould you like to confirm these activities for your trip?\nPress 1 for confirm or 2 for cancel`;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const newUserMessage = { type: 'user', content: userInput };
        let newBotMessage = { type: 'bot', content: '' };

        if (stage === 0) {
            if (userInput === '1') {
                newBotMessage.content = tokyoItinerary;
                setDestination('Tokyo');
                setStage(1);
            } else if (userInput === '2') {
                newBotMessage.content = kyotoItinerary;
                setDestination('Kyoto');
                setStage(1);
            } else {
                newBotMessage.content = 'Please enter 1 for Tokyo or 2 for Kyoto';
            }
        } else if (stage === 1) {
            if (userInput === '1') {
                newBotMessage.content = `Yay! 🎉 Your 4-day trip is now planned.\nHave a fantastic trip to ${destination} ✨`;
                setStage(2);
            } else if (userInput === '2') {
                newBotMessage.content = 'No problem! Let\'s start over.\n\n' + initialMessage;
                setStage(0);
            } else {
                newBotMessage.content = 'Please enter 1 to confirm or 2 to cancel';
            }
        }

        setMessages([...messages, newUserMessage, newBotMessage]);
        setUserInput('');
    };
    useState(() => {
        setMessages([{ type: 'bot', content: initialMessage }]);
    }, []);

    return (
        <div className="flex flex-col h-screen p-4">
            <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h1 className="text-xl font-semibold">Travel Planner</h1>
            </div>
            
            <div className="flex-1 overflow-y-auto mb-4">
                {messages.map((message, index) => (
                    message.type === 'bot' ? 
                        <BotMessage key={index} message={message.content} /> :
                        <UserMessage key={index} message={message.content} />
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type 1 or 2..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={stage === 2}
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    disabled={!userInput.trim() || stage === 2}
                >
                    <Send className="h-5 w-5" />
                </button>
            </form>
        </div>
    );
};