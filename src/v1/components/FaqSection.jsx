import { Minus, Plus } from 'lucide-react'

export default function FaqSection({ activeFaq, faqs, language, setActiveFaq, setLanguage }) {
  const hindiQuestions = ['अध्रोगा क्या है?', 'अध्रोगा परियोजनाओं का चयन कैसे करता है?', 'अध्रोगा के माध्यम से कौन निवेश कर सकता है?', 'निवेश से पहले कौन-सी जानकारी उपलब्ध है?', 'निवेश प्रक्रिया कैसे काम करती है?', 'मैं अपने निवेश को कैसे ट्रैक कर सकता हूँ?']
  return <section className="faq-section" id="faq">
    <div className="faq-intro"><div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div><h2>Got Questions?<br/>We've Got Answers.</h2><p>Find answers to common questions about investing with Adhroga. Switch language to view FAQs in English or Hindi.</p><div className="skyline-decoration">▥ ▥ ▥ ▥ ▥ ▥</div></div>
    <div className="faq-content"><div className="language-toggle"><button className={language === 'English' ? 'active' : ''} onClick={() => setLanguage('English')}>English</button><button className={language === 'हिंदी' ? 'active' : ''} onClick={() => setLanguage('हिंदी')}>हिंदी</button></div>{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}><b>{language === 'हिंदी' ? hindiQuestions[index] : question}</b>{activeFaq === index ? <Minus size={15}/> : <Plus size={15}/>}</button>{activeFaq === index && <p>{language === 'हिंदी' ? 'अध्रोगा निवेशकों को स्पष्ट परियोजना जानकारी और उचित जांच के साथ चुने हुए रियल एस्टेट अवसर खोजने में मदद करता है।' : answer}</p>}</div>)}</div>
  </section>
}