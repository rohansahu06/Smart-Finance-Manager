"use client";
import React from "react";
import "./Investment.css";

export default function InvestmentPage() {
    const investments = [
        {
            icon: "🏦",
            type: "Savings Account",
            description: "Keep your money accessible while earning interest on your everyday savings.",
            features: ["Easy access to funds", "Flexible withdrawals", "Suitable for short-term goals"],
            risk: "Low Risk",
            category: "Savings"
        },
        {
            icon: "📄",
            type: "Fixed Deposit",
            description: "Invest a lump sum for a chosen tenure and receive predictable returns.",
            features: ["Fixed tenure", "Predictable returns", "Multiple tenure options"],
            risk: "Low Risk",
            category: "Deposits"
        },
        {
            icon: "📅",
            type: "Recurring Deposit",
            description: "Build your savings gradually with regular monthly contributions.",
            features: ["Monthly investment", "Disciplined saving", "Flexible tenure options"],
            risk: "Low Risk",
            category: "Deposits"
        },
        {
            icon: "🔐",
            type: "Tax-Saving FD",
            description: "A fixed-deposit option designed for eligible customers seeking tax-saving benefits.",
            features: ["Fixed returns", "Tax-saving eligibility", "Longer investment horizon"],
            risk: "Low Risk",
            category: "Tax Saving"
        },
        {
            icon: "💼",
            type: "Bonds",
            description: "Explore fixed-income opportunities for customers looking for long-term investments.",
            features: ["Fixed-income potential", "Long-term investment", "Portfolio diversification"],
            risk: "Moderate Risk",
            category: "Fixed Income"
        },
        {
            icon: "📈",
            type: "Mutual Funds",
            description: "Access professionally managed portfolios across different asset classes.",
            features: ["Portfolio diversification", "Multiple fund categories", "Market-linked returns"],
            risk: "Market Linked",
            category: "Market Investments"
        },
        {
            icon: "🏛️",
            type: "Public Provident Fund",
            description: "A long-term savings option designed for disciplined financial planning.",
            features: ["Long-term savings", "Government-backed scheme", "Retirement planning"],
            risk: "Low Risk",
            category: "Government Schemes"
        },
        {
            icon: "🥇",
            type: "Sovereign Gold Bonds",
            description: "Gain exposure to gold through a government-issued investment instrument.",
            features: ["Gold-linked investment", "Long-term wealth planning", "Portfolio diversification"],
            risk: "Market Linked",
            category: "Gold"
        },
        {
            icon: "👴",
            type: "National Pension System",
            description: "Plan for retirement with a structured long-term investment approach.",
            features: ["Retirement planning", "Long-term investing", "Tax benefits may apply"],
            risk: "Market Linked",
            category: "Retirement"
        }
    ];

    const benefits = [
        {
            icon: "🛡️",
            title: "Secure Banking",
            text: "Your investment journey is supported by secure digital banking infrastructure."
        },
        {
            icon: "📊",
            title: "Diversified Options",
            text: "Choose from savings, fixed-income, retirement and market-linked products."
        },
        {
            icon: "💡",
            title: "Informed Decisions",
            text: "Understand product features, risks and investment horizons before investing."
        },
        {
            icon: "📱",
            title: "Digital Access",
            text: "Manage your banking and investment services through a convenient digital experience."
        }
    ];

    return (
        <main className="investment-page">
            <section className="investment-hero">
                <div className="investment-hero-content">
                    <span className="hero-badge">PAYZEN WEALTH</span>
                    <h1>Grow With PayZen <span>Build Confidence</span></h1>
                    <p>Explore investment solutions designed for different financial goals, investment horizons and risk preferences.</p>
                    <div className="hero-buttons">
                        <button className="primary-btn">Explore Investments</button>
                        <button className="secondary-btn">Talk to an Advisor</button>
                    </div>
                </div>
            </section>

            <section className="investment-intro">
                <div className="section-heading">
                    <span>INVESTMENT SERVICES</span>
                    <h2>Solutions for Every Financial Goal</h2>
                    <p>Whether you are building your first savings portfolio, planning for retirement or looking for market-linked opportunities, PayZen provides a range of investment options to explore.</p>
                </div>
            </section>

            <section className="investment-products">
                <div className="products-header">
                    <div>
                        <span className="small-heading">OUR PRODUCTS</span>
                        <h2>Explore Investment Options</h2>
                    </div>
                    <p>Select an investment category based on your financial objective, time horizon and risk preference.</p>
                </div>

                <div className="investment-grid">
                    {investments.map((item, index) => (
                        <article className="investment-card" key={index}>
                            <div className="card-top">
                                <div className="investment-icon">{item.icon}</div>
                                <span className="risk-badge">{item.risk}</span>
                            </div>
                            <span className="product-category">{item.category}</span>
                            <h3>{item.type}</h3>
                            <p className="product-description">{item.description}</p>
                            <div className="features">
                                {item.features.map((feature, featureIndex) => (
                                    <div className="feature" key={featureIndex}>
                                        <span className="check">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="learn-more">Learn More <span>→</span></button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="investment-benefits">
                <div className="section-heading light">
                    <span>WHY PAYZEN</span>
                    <h2>A Smarter Way to Invest</h2>
                    <p>Build your financial future with a banking experience focused on security, convenience and informed choices.</p>
                </div>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div className="benefit-card" key={index}>
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="investment-guidance">
                <div className="guidance-content">
                    <span>PLAN AHEAD</span>
                    <h2>Your Goals. Your Strategy.</h2>
                    <p>The right investment depends on your financial goals, time horizon, liquidity requirements and tolerance for investment risk.</p>
                    <div className="guidance-points">
                        <div><strong>01</strong><span>Define your financial goal</span></div>
                        <div><strong>02</strong><span>Choose an appropriate investment horizon</span></div>
                        <div><strong>03</strong><span>Understand risks before investing</span></div>
                    </div>
                </div>
                <div className="guidance-box">
                    <div className="guidance-box-icon">💬</div>
                    <h3>Need help choosing?</h3>
                    <p>Speak with a financial advisor to understand which investment options may suit your goals.</p>
                    <button>Contact Us →</button>
                </div>
            </section>

            <section className="investment-disclaimer">
                <strong>Investment Disclaimer</strong>
                <p>Investment products may involve different levels of risk and returns. Market-linked investments can fluctuate in value. Please review the applicable product documents, terms and conditions before investing. This page is for informational purposes only and does not constitute investment advice.</p>
            </section>
        </main>
    );
}