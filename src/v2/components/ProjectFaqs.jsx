import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X, HelpCircle } from "lucide-react";

const faqs = {
  English: [
    { id: "what-is", question: "What is The Green Estate?", answer: "The Green Estate is a residential development in Mohali, Punjab.", category: "general" },
    { id: "status", question: "What is the current status of the project?", answer: "The project is currently listed as ongoing. Check the latest project updates for available progress information.", category: "general" },
    { id: "roi", question: "What is the expected return on investment?", answer: "Returns are not guaranteed and depend on project performance, market conditions and the applicable investment terms. Review the project disclosures before investing.", category: "investment" },
    { id: "documents", question: "What documents will be provided to investors?", answer: "Available documents include project, registration, approval, payment-plan and legal information.", category: "legal" },
    { id: "rera", question: "Is the project RERA registered?", answer: "The project information lists RERA registration number PBRERA-SAS79-PR1234. Please verify the registration and documents before investing.", category: "legal" },
    { id: "risks", question: "What are the key risks involved?", answer: "Real estate investments carry risks, including project delays, market changes and the possibility of loss. Review all available disclosures and seek independent advice.", category: "investment" },
  ],
  Hindi: [
    { id: "what-is", question: "द ग्रीन एस्टेट क्या है?", answer: "द ग्रीन एस्टेट मोहाली, पंजाब में एक आवासीय परियोजना है।", category: "general" },
    { id: "status", question: "परियोजना की वर्तमान स्थिति क्या है?", answer: "परियोजना की स्थिति वर्तमान में जारी है। उपलब्ध प्रगति जानकारी के लिए नवीनतम अपडेट देखें।", category: "general" },
    { id: "roi", question: "निवेश पर अपेक्षित रिटर्न क्या है?", answer: "रिटर्न की गारंटी नहीं है और यह परियोजना के प्रदर्शन, बाजार की स्थितियों और लागू निवेश शर्तों पर निर्भर करता है। निवेश से पहले परियोजना के खुलासे पढ़ें।", category: "investment" },
    { id: "documents", question: "निवेशकों को कौन-से दस्तावेज़ दिए जाएंगे?", answer: "उपलब्ध दस्तावेज़ों में परियोजना, पंजीकरण, अनुमोदन, भुगतान योजना और कानूनी जानकारी शामिल है।", category: "legal" },
    { id: "rera", question: "क्या परियोजना RERA में पंजीकृत है?", answer: "परियोजना की जानकारी में RERA पंजीकरण संख्या PBRERA-SAS79-PR1234 दी गई है। निवेश से पहले पंजीकरण और दस्तावेज़ों की पुष्टि करें।", category: "legal" },
    { id: "risks", question: "मुख्य जोखिम क्या हैं?", answer: "रियल एस्टेट निवेश में परियोजना में देरी, बाजार में बदलाव और नुकसान की संभावना सहित जोखिम होते हैं। सभी उपलब्ध खुलासे पढ़ें और स्वतंत्र सलाह लें।", category: "investment" },
  ],
};

const categoryLabels = {
  English: { all: "All", general: "General", investment: "Investment", legal: "Legal" },
  Hindi: { all: "सभी", general: "सामान्य", investment: "निवेश", legal: "कानूनी" },
};

export default function ProjectFaqs() {
  const [openFaq, setOpenFaq] = useState(null);
  const [language, setLanguage] = useState("English");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const searchRef = useRef(null);

  const currentFaqs = faqs[language];
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
    <section className="v2-faq-page v2-section" id="faqs">
      <header className="v2-faq-header">
        <div className="v2-faq-title-block">
          <span className="v2-faq-eyebrow">Project Information</span>
          <h2>Frequently Asked Questions</h2>
          <p className="v2-faq-subtitle">
            {language === "English"
              ? "Quick answers to common questions about The Green Estate"
              : "द ग्रीन एस्टेट के बारे में सामान्य प्रश्नों के त्वरित उत्तर"}
          </p>
        </div>
        <div className="v2-faq-controls">
          {/* <div className="v2-faq-search" role="search">
            <Search className="v2-faq-search-icon" size={18} aria-hidden="true" />
            <input
              ref={searchRef}
              type="search"
              placeholder={language === "English" ? "Search questions…" : "प्रश्न खोजें…"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="v2-faq-search-input"
              aria-label={language === "English" ? "Search FAQs" : "FAQ खोजें"}
            />
            {searchQuery && (
              <button className="v2-faq-search-clear" onClick={() => setSearchQuery("")} aria-label={language === "English" ? "Clear search" : "खोज साफ़ करें"}>
                <X size={14} />
              </button>
            )}
          </div> */}
          <div className="v2-faq-language" aria-label="FAQ language">
            <button className={language === "English" ? "v2-faq-language-active" : ""} onClick={() => { setLanguage("English"); setSearchQuery(""); }}>EN</button>
            <button className={language === "Hindi" ? "v2-faq-language-active" : ""} onClick={() => { setLanguage("Hindi"); setSearchQuery(""); }}>HI</button>
          </div>
        </div>
      </header>

      {/* <div className="v2-faq-filters" role="tablist" aria-label="FAQ categories">
        {categories.map((cat) => (
          <button key={cat} role="tab" aria-selected={activeCategory === cat} className={`v2-faq-filter ${activeCategory === cat ? "v2-faq-filter-active" : ""}`} onClick={() => { setActiveCategory(cat); setSearchQuery(""); }}>
            {labels[cat]}
          </button>
        ))}
      </div>

      <div className="v2-faq-stats" aria-live="polite">
        <span>{filteredFaqs.length} {language === "English" ? "questions" : "प्रश्न"}</span>
        {searchQuery && <span className="v2-faq-search-hint">{language === "English" ? `filtered by "${searchQuery}"` : `"${searchQuery}" द्वारा फ़िल्टर किया गया`}</span>}
      </div> */}

      <div className="v2-faq-list" role="tablist">
        {filteredFaqs.length === 0 ? (
          <div className="v2-faq-empty">
            <HelpCircle size={48} className="v2-faq-empty-icon" aria-hidden="true" />
            <p>{language === "English" ? "No matching questions found" : "कोई मिलते-जुलते प्रश्न नहीं मिले"}</p>
            <button className="v2-faq-clear-search" onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>{language === "English" ? "Clear filters" : "फ़िल्टर साफ़ करें"}</button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <article key={faq.id} className={`v2-faq-item ${isOpen ? "v2-faq-item-open" : ""}`} role="tabpanel">
                <button aria-expanded={isOpen} aria-controls={`faq-content-${faq.id}`} id={`faq-tab-${faq.id}`} onClick={() => toggleFaq(faq.id)} onKeyDown={(e) => handleKeyDown(e, faq.id)} className="v2-faq-question">
                  <span className="v2-faq-question-text">{faq.question}</span>
                  <ChevronDown className={`v2-faq-chevron ${isOpen ? "v2-faq-chevron-open" : ""}`} size={22} aria-hidden="true" />
                </button>
                <div id={`faq-content-${faq.id}`} role="region" aria-labelledby={`faq-tab-${faq.id}`} className="v2-faq-answer-wrapper" hidden={!isOpen}>
                  <div className="v2-faq-answer"><p>{faq.answer}</p></div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {filteredFaqs.length > 0 && (
        <div className="v2-faq-cta">
          <p>{language === "English" ? "Still have questions? Our team is here to help." : "अभी भी सवाल हैं? हमारी टीम आपकी मदद के लिए यहाँ है।"}</p>
          <a href="#contact" className="v2-button-primary">{language === "English" ? "Contact Us" : "संपर्क करें"}</a>
        </div>
      )}
    </section>
  );
}