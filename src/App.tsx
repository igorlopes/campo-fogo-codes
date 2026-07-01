import { useState } from 'react';
import { useSpreadsheetReader } from './hooks/useSpreadsheetReader';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConfigPanel } from './components/ConfigPanel';
import { RescueCard } from './components/RescueCard';
import './App.css';
import './index.css';

function App() {
  const { data, error, handleFileUpload } = useSpreadsheetReader();
  const [customText, setCustomText] = useState<string>('');
  const [titleText, setTitleText] = useState<string>('');
  const [useIncrementalCode, setUseIncrementalCode] = useState<boolean>(false);
  const [incrementalPrefix, setIncrementalPrefix] = useState<string>('');
  const [useInstagram, setUseInstagram] = useState<boolean>(false);
  const [instagramHandle, setInstagramHandle] = useState<string>('');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <Header />

      <ConfigPanel
        data={data}
        error={error}
        handleFileUpload={handleFileUpload}
        titleText={titleText}
        setTitleText={setTitleText}
        customText={customText}
        setCustomText={setCustomText}
        useIncrementalCode={useIncrementalCode}
        setUseIncrementalCode={setUseIncrementalCode}
        incrementalPrefix={incrementalPrefix}
        setIncrementalPrefix={setIncrementalPrefix}
        useInstagram={useInstagram}
        setUseInstagram={setUseInstagram}
        instagramHandle={instagramHandle}
        setInstagramHandle={setInstagramHandle}
        handlePrint={handlePrint}
      />

      {/* Cards Grid - Visible when printing */}
      {data.length > 0 && (
        <div className="cards-grid">
          {data.map((item, index) => {
            const formattedIncremental = useIncrementalCode
              ? `${incrementalPrefix}${String(index + 1).padStart(3, '0')} - `
              : '';

            return (
              <RescueCard
                key={index}
                code={item.code}
                titleText={titleText}
                customText={customText}
                formattedIncremental={formattedIncremental}
                useInstagram={useInstagram}
                instagramHandle={instagramHandle}
              />
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
