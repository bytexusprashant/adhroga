import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X, HelpCircle } from "lucide-react";

const faqData = {
  English: [
    { id: "what-is", question: "What is Adhroga?", answer: "Adhroga is a real estate investment platform that helps investors discover curated property opportunities with clear project information.", category: "general" },
    { id: "selection", question: "How does Adhroga select projects?", answer: "Projects are reviewed for developer credibility, documentation, asset details and relevant due-diligence criteria before being presented.", category: "general" },
    { id: "who", question: "Who can invest through Adhroga?", answer: "Eligible individual and institutional investors can explore opportunities, subject to each project's terms and applicable regulations.", category: "investment" },
    { id: "info", question: "What information is available before investing?", answer: "Project details, location, documentation, investment structure, timelines and other available disclosures are provided for review.", category: "legal" },
    { id: "process", question: "How does the investment process work?", answer: "Discover an opportunity, review its information, complete the required checks and follow the project-specific investment process.", category: "investment" },
    { id: "track", question: "How can I track my investment?", answer: "Investors can receive project updates and relevant progress information through the platform's investor communication process.", category: "general" },
  ],
  हिंदी: [
    { id: "what-is", question: "अध्रोगा क्या है?", answer: "अध्रोगा एक रियल एस्टेट निवेश प्लेटफॉर्म है जो निवेशकों को स्पष्ट परियोजना जानकारी के साथ क्यूरेटेड संपत्ति अवसर खोजने में मदद करता है।", category: "general" },
    { id: "selection", question: "अध्रोगा परियोजनाओं का चयन कैसे करता है?", answer: "परियोजनाओं की समीक्षा डेवलपर विश्वसनीयता, दस्तावेज़ीकरण, संपत्ति विवरण और प्रासंगिक उचित परिश्रम मानदंडों के लिए की जाती है।", category: "general" },
    { id: "who", question: "अध्रोगा के माध्यम से कौन निवेश कर सकता है?", answer: "योग्य व्यक्तिगत और संस्थागत निवेशक अवसरों का पता लगा सकते हैं, प्रत्येक परियोजना की शर्तों और लागू नियमों के अधीन।", category: "investment" },
    { id: "info", question: "निवेश से पहले कौन-सी जानकारी उपलब्ध है?", answer: "परियोजना विवरण, स्थान, दस्तावेज़ीकरण, निवेश संरचना, समयसीमा और अन्य उपलब्ध खुलासे समीक्षा के लिए प्रदान किए जाते हैं।", category: "legal" },
    { id: "process", question: "निवेश प्रक्रिया कैसे काम करती है?", answer: "एक अवसर खोजें, उसकी जानकारी की समीक्षा करें, आवश्यक जांच पूरी करें और परियोजना-विशिष्ट निवेश प्रक्रिया का पालन करें।", category: "investment" },
    { id: "track", question: "मैं अपने निवेश को कैसे ट्रैक कर सकता हूँ?", answer: "निवेशक प्लेटफॉर्म की निवेशक संचार प्रक्रिया के माध्यम से परियोजना अपडेट और प्रासंगिक प्रगति जानकारी प्राप्त कर सकते हैं।", category: "general" },
  ],
};

const categoryLabels = {
  English: { all: "All", general: "General", investment: "Investment", legal: "Legal" },
  हिंदी: { all: "सभी", general: "सामान्य", investment: "निवेश", legal: "कानूनी" },
};

export default function FaqSection({ language, setLanguage }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const searchRef = useRef(null);

  const currentFaqs = faqData[language];
  const labels = categoryLabels[language];

  const filteredFaqs = currentFaqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "general", "investment", "legal"];

  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);
  const handleKeyDown = (e, id) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFaq(id); } };

  useEffect(() => { searchRef.current?.focus(); }, []);

  return (
    <section className="faq-section-modern" id="faq">
      <header className="faq-header">
        <div className="faq-title-block">
          <span className="faq-eyebrow">Frequently Asked Questions</span>
          <h2>Got Questions? We've Got Answers.</h2>
          <p className="faq-subtitle">Quick answers to common questions about investing with Adhroga.</p>
        </div>
        <div className="faq-controls">
          {/* <div className="faq-search" role="search">
            <Search className="faq-search-icon" size={18} aria-hidden="true" />
            <input
              ref={searchRef}
              type="search"
              placeholder={language === "English" ? "Search questions…" : "प्रश्न खोजें…"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
              aria-label={language === "English" ? "Search FAQs" : "FAQ खोजें"}
            />
            {searchQuery && (
              <button className="faq-search-clear" onClick={() => setSearchQuery("")} aria-label={language === "English" ? "Clear search" : "खोज साफ़ करें"}>
                <X size={14} />
              </button>
            )}
          </div> */}
          <div className="faq-language" aria-label="FAQ language">
            <button className={language === "English" ? "active" : ""} onClick={() => { setLanguage("English"); setSearchQuery(""); }}>English</button>
            <button className={language === "हिंदी" ? "active" : ""} onClick={() => { setLanguage("हिंदी"); setSearchQuery(""); }}>हिंदी</button>
          </div>
        </div>
      </header>

      {/* <div className="faq-filters" role="tablist" aria-label="FAQ categories">
        {categories.map((cat) => (
          <button key={cat} role="tab" aria-selected={activeCategory === cat} className={`faq-filter ${activeCategory === cat ? "active" : ""}`} onClick={() => { setActiveCategory(cat); setSearchQuery(""); }}>
            {labels[cat]}
          </button>
        ))}
      </div> */}

      {/* <div className="faq-stats" aria-live="polite">
        <span>{filteredFaqs.length} {language === "English" ? "questions" : "प्रश्न"}</span>
        {searchQuery && <span className="faq-search-hint">{language === "English" ? `filtered by "${searchQuery}"` : `"${searchQuery}" द्वारा फ़िल्टर किया गया`}</span>}
      </div> */}

      <div className="faq-list" role="tablist">
        {filteredFaqs.length === 0 ? (
          <div className="faq-empty">
            <HelpCircle size={48} className="faq-empty-icon" aria-hidden="true" />
            <p>{language === "English" ? "No matching questions found" : "कोई मिलते-जुलते प्रश्न नहीं मिले"}</p>
            <button className="faq-clear-search" onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>{language === "English" ? "Clear filters" : "फ़िल्टर साफ़ करें"}</button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <article key={faq.id} className={`faq-item ${isOpen ? "open" : ""}`} role="tabpanel">
                <button aria-expanded={isOpen} aria-controls={`faq-content-${faq.id}`} id={`faq-tab-${faq.id}`} onClick={() => toggleFaq(faq.id)} onKeyDown={(e) => handleKeyDown(e, faq.id)} className="faq-question">
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown className={`faq-chevron ${isOpen ? "open" : ""}`} size={22} aria-hidden="true" />
                </button>
                <div id={`faq-content-${faq.id}`} role="region" aria-labelledby={`faq-tab-${faq.id}`} className="faq-answer-wrapper" hidden={!isOpen}>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {filteredFaqs.length > 0 && (
        <div className="faq-cta">
          <p style={{fontSize: "16px"}}>{language === "English" ? "Still have questions? Our team is here to help." : "अभी भी सवाल हैं? हमारी टीम आपकी मदद के लिए यहाँ है।"}</p>
          <a href="#contact" className="btn btn-gold">{language === "English" ? "Contact Us" : "संपर्क करें"}</a>
        </div>
      )}
    </section>
  );
}