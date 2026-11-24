import { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'

const faqs = {
  English: [
    ['What is The Green Estate?', 'The Green Estate is a residential development in Mohali, Punjab.'],
    ['What is the current status of the project?', 'The project is currently listed as ongoing. Check the latest project updates for available progress information.'],
    ['What is the expected return on investment?', 'Returns are not guaranteed and depend on project performance, market conditions and the applicable investment terms. Review the project disclosures before investing.'],
    ['What documents will be provided to investors?', 'Available documents include project, registration, approval, payment-plan and legal information.'],
    ['Is the project RERA registered?', 'The project information lists RERA registration number PBRERA-SAS79-PR1234. Please verify the registration and documents before investing.'],
    ['What are the key risks involved?', 'Real estate investments carry risks, including project delays, market changes and the possibility of loss. Review all available disclosures and seek independent advice.'],
  ],
  Hindi: [
    ['द ग्रीन एस्टेट क्या है?', 'द ग्रीन एस्टेट मोहाली, पंजाब में एक आवासीय परियोजना है।'],
    ['परियोजना की वर्तमान स्थिति क्या है?', 'परियोजना की स्थिति वर्तमान में जारी है। उपलब्ध प्रगति जानकारी के लिए नवीनतम अपडेट देखें।'],
    ['निवेश पर अपेक्षित रिटर्न क्या है?', 'रिटर्न की गारंटी नहीं है और यह परियोजना के प्रदर्शन, बाजार की स्थितियों और लागू निवेश शर्तों पर निर्भर करता है। निवेश से पहले परियोजना के खुलासे पढ़ें।'],
    ['निवेशकों को कौन-से दस्तावेज़ दिए जाएंगे?', 'उपलब्ध दस्तावेज़ों में परियोजना, पंजीकरण, अनुमोदन, भुगतान योजना और कानूनी जानकारी शामिल है।'],
    ['क्या परियोजना RERA में पंजीकृत है?', 'परियोजना की जानकारी में RERA पंजीकरण संख्या PBRERA-SAS79-PR1234 दी गई है। निवेश से पहले पंजीकरण और दस्तावेज़ों की पुष्टि करें।'],
    ['मुख्य जोखिम क्या हैं?', 'रियल एस्टेट निवेश में परियोजना में देरी, बाजार में बदलाव और नुकसान की संभावना सहित जोखिम होते हैं। सभी उपलब्ध खुलासे पढ़ें और स्वतंत्र सलाह लें।'],
  ],
}

export default function ProjectFaqs() {
  const [openFaq, setOpenFaq] = useState(0)
  const [language, setLanguage] = useState('English')
  return <section className="v2-faq-page v2-section" id="faqs">
    <div className="v2-section-heading v2-section-heading-row v2-faq-heading"><h2>Project FAQs</h2><div className="v2-faq-language" aria-label="FAQ language"><button className={language === 'English' ? 'v2-faq-language-active' : ''} onClick={() => setLanguage('English')}>English</button><button className={language === 'Hindi' ? 'v2-faq-language-active' : ''} onClick={() => setLanguage('Hindi')}>हिंदी</button></div></div>
    <div className="v2-faq-list">{faqs[language].map(([question, answer], index) => <article className="v2-faq-item" key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span>{openFaq === index ? <ChevronDown className="v2-chevron-open" size={18}/> : <Plus size={18}/>}</button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
  </section>
}