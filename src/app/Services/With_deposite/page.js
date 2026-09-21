"use client";

import { useEffect, useState } from "react";
import "./With_deposite.css";

export default function DepositePage() {
    const API_URL = "http://localhost:5000";

    const [verificationStep, setVerificationStep] =
        useState("credentials");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");

    const [withdrawOTP, setWithdrawOTP] = useState("");

    const [account, setAccount] = useState(null);
    const [transactions, setTransactions] = useState([]);

    const [amount, setAmount] = useState("");

    const [isVerifying, setIsVerifying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [pageLoading, setPageLoading] = useState(false);


    // ==========================================
    // CHECK LOGIN
    // ==========================================

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first.");
            window.location.href = "/Login";
        }
    }, []);


    // ==========================================
    // INITIAL EMAIL + PASSWORD
    // ==========================================

    const handleCredentialsSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please enter email and password.");
            return;
        }

        try {
            setIsVerifying(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first.");
                window.location.href = "/Login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/transaction-auth/verify-credentials`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                    "Invalid email or password."
                );

                return;
            }

            alert(
                "OTP sent to your registered email."
            );

            setVerificationStep("otp");

        } catch (error) {
            console.error(
                "Credential Verification Error:",
                error
            );

            alert(
                "Unable to connect to server."
            );

        } finally {
            setIsVerifying(false);
        }
    };


    // ==========================================
    // INITIAL OTP VERIFY
    // ==========================================

    const handleOTPSubmit = async (e) => {
        e.preventDefault();

        if (!otp) {
            alert("Please enter OTP.");
            return;
        }

        try {
            setIsVerifying(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first.");
                window.location.href = "/Login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/transaction-auth/verify-otp`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        email,
                        otp
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                    "Invalid OTP."
                );

                return;
            }

            if (data.verified) {
                alert(
                    "Transaction verification successful."
                );

                setVerificationStep("account");

                await fetchAccountData();
            }

        } catch (error) {
            console.error(
                "OTP Verification Error:",
                error
            );

            alert(
                "Unable to connect to server."
            );

        } finally {
            setIsVerifying(false);
        }
    };


    // ==========================================
    // FETCH ACCOUNT DATA
    // ==========================================

    const fetchAccountData = async () => {
        try {
            setPageLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first.");
                window.location.href = "/Login";
                return;
            }

            const accountResponse = await fetch(
                `${API_URL}/api/account/me`,
                {
                    method: "GET",

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const accountData =
                await accountResponse.json();

            if (!accountResponse.ok) {
                alert(
                    accountData.message ||
                    "Failed to fetch account details."
                );

                return;
            }

            setAccount(accountData.account);


            const transactionResponse = await fetch(
                `${API_URL}/api/transaction/history`,
                {
                    method: "GET",

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const transactionData =
                await transactionResponse.json();

            if (transactionResponse.ok) {
                setTransactions(
                    transactionData.transactions || []
                );
            }

        } catch (error) {
            console.error(
                "Fetch Account Error:",
                error
            );

            alert(
                "Unable to connect to server."
            );

        } finally {
            setPageLoading(false);
        }
    };


    // ==========================================
    // DEPOSIT
    // ==========================================

    const handleDeposit = async () => {
        const transactionAmount = Number(amount);

        if (
            !amount ||
            !Number.isFinite(transactionAmount) ||
            transactionAmount <= 0
        ) {
            alert("Please enter a valid amount.");
            return;
        }

        try {
            setIsLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first.");
                window.location.href = "/Login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/transaction/deposit`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        amount: transactionAmount
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                    "Deposit failed."
                );

                return;
            }

            alert(
                "Money deposited successfully."
            );

            setAmount("");

            await fetchAccountData();

        } catch (error) {
            console.error(
                "Deposit Error:",
                error
            );

            alert(
                "Unable to connect to server."
            );

        } finally {
            setIsLoading(false);
        }
    };


    // ==========================================
    // SEND WITHDRAW OTP
    // ==========================================

    const handleWithdrawRequest = async () => {
        const transactionAmount = Number(amount);

        if (
            !amount ||
            !Number.isFinite(transactionAmount) ||
            transactionAmount <= 0
        ) {
            alert("Please enter a valid amount.");
            return;
        }

        if (
            account &&
            transactionAmount > account.balance
        ) {
            alert("Insufficient balance.");
            return;
        }

        try {
            setIsVerifying(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first.");
                window.location.href = "/Login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/transaction-auth/withdraw/send-otp`,
                {
                    method: "POST",

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                    "Unable to send withdraw OTP."
                );

                return;
            }

            alert(
                "Withdraw OTP sent to your registered email."
            );

            setWithdrawOTP("");

            setVerificationStep(
                "withdraw-otp"
            );

        } catch (error) {
            console.error(
                "Withdraw OTP Error:",
                error
            );

            alert(
                "Unable to connect to server."
            );

        } finally {
            setIsVerifying(false);
        }
    };


    // ==========================================
    // VERIFY WITHDRAW OTP
    // ==========================================

    const handleWithdrawOTPSubmit = async (e) => {
        e.preventDefault();

        if (!withdrawOTP) {
            alert("Please enter withdraw OTP.");
            return;
        }

        try {
            setIsVerifying(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first.");
                window.location.href = "/Login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/transaction-auth/withdraw/verify-otp`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        otp: withdrawOTP
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                    "Invalid withdraw OTP."
                );

                return;
            }

            if (data.verified) {
                await executeWithdraw();
            }

        } catch (error) {
            console.error(
                "Withdraw OTP Verification Error:",
                error
            );

            alert(
                "Unable to connect to server."
            );

        } finally {
            setIsVerifying(false);
        }
    };


    // ==========================================
    // ACTUAL WITHDRAW
    // ==========================================

    const executeWithdraw = async () => {
        const transactionAmount = Number(amount);

        if (
            !amount ||
            !Number.isFinite(transactionAmount) ||
            transactionAmount <= 0
        ) {
            alert("Please enter a valid amount.");
            return;
        }

        try {
            setIsLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first.");
                window.location.href = "/Login";
                return;
            }

            const response = await fetch(
                `${API_URL}/api/transaction/withdraw`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        amount: transactionAmount
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                    "Withdrawal failed."
                );

                return;
            }

            alert(
                "Money withdrawn successfully."
            );

            setAmount("");
            setWithdrawOTP("");

            setVerificationStep("account");

            await fetchAccountData();

        } catch (error) {
            console.error(
                "Withdraw Error:",
                error
            );

            alert(
                "Unable to connect to server."
            );

        } finally {
            setIsLoading(false);
        }
    };


    // ==========================================
    // INITIAL CREDENTIAL SCREEN
    // ==========================================

    if (verificationStep === "credentials") {
        return (
            <div className="transaction-page">

                <div className="verification-container">

                    <div className="verification-card">

                        <div className="verification-header">

                            <h1>
                                Verify Your Identity
                            </h1>

                            <p>
                                Enter your registered email
                                and password to continue.
                            </p>

                        </div>


                        <form
                            onSubmit={
                                handleCredentialsSubmit
                            }
                            className="verification-form"
                        >

                            <div className="form-group">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                    disabled={
                                        isVerifying
                                    }
                                />

                            </div>


                            <div className="form-group">

                                <label htmlFor="password">
                                    Password
                                </label>

                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                    disabled={
                                        isVerifying
                                    }
                                />

                            </div>


                            <button
                                type="submit"
                                className="verify-button"
                                disabled={
                                    isVerifying
                                }
                            >
                                {isVerifying
                                    ? "Verifying..."
                                    : "Continue"}
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        );
    }


    // ==========================================
    // INITIAL OTP SCREEN
    // ==========================================

    if (verificationStep === "otp") {
        return (
            <div className="transaction-page">

                <div className="verification-container">

                    <div className="verification-card">

                        <div className="verification-header">

                            <h1>
                                Enter OTP
                            </h1>

                            <p>
                                We have sent a verification
                                OTP to your registered email.
                            </p>

                        </div>


                        <form
                            onSubmit={
                                handleOTPSubmit
                            }
                            className="verification-form"
                        >

                            <div className="form-group">

                                <label htmlFor="otp">
                                    Enter OTP
                                </label>

                                <input
                                    id="otp"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="6"
                                    placeholder="Enter 6 digit OTP"
                                    value={otp}
                                    onChange={(e) =>
                                        setOtp(
                                            e.target.value.replace(
                                                /\D/g,
                                                ""
                                            )
                                        )
                                    }
                                    disabled={
                                        isVerifying
                                    }
                                />

                            </div>


                            <button
                                type="submit"
                                className="verify-button"
                                disabled={
                                    isVerifying
                                }
                            >
                                {isVerifying
                                    ? "Verifying OTP..."
                                    : "Verify OTP"}
                            </button>


                            <button
                                type="button"
                                className="back-button"
                                onClick={() => {
                                    setOtp("");
                                    setVerificationStep(
                                        "credentials"
                                    );
                                }}
                                disabled={
                                    isVerifying
                                }
                            >
                                Back
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        );
    }


    // ==========================================
    // WITHDRAW OTP SCREEN
    // ==========================================

    if (
        verificationStep ===
        "withdraw-otp"
    ) {
        return (
            <div className="transaction-page">

                <div className="verification-container">

                    <div className="verification-card">

                        <div className="verification-header">

                            <h1>
                                Confirm Withdrawal
                            </h1>

                            <p>
                                A fresh OTP has been sent
                                to your registered email.
                                Enter it to confirm this
                                withdrawal.
                            </p>

                        </div>


                        <form
                            onSubmit={
                                handleWithdrawOTPSubmit
                            }
                            className="verification-form"
                        >

                            <div className="form-group">

                                <label htmlFor="withdrawOTP">
                                    Enter Withdraw OTP
                                </label>

                                <input
                                    id="withdrawOTP"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="6"
                                    placeholder="Enter 6 digit OTP"
                                    value={withdrawOTP}
                                    onChange={(e) =>
                                        setWithdrawOTP(
                                            e.target.value.replace(
                                                /\D/g,
                                                ""
                                            )
                                        )
                                    }
                                    disabled={
                                        isVerifying ||
                                        isLoading
                                    }
                                />

                            </div>


                            <button
                                type="submit"
                                className="verify-button"
                                disabled={
                                    isVerifying ||
                                    isLoading
                                }
                            >
                                {isVerifying ||
                                isLoading
                                    ? "Processing..."
                                    : "Verify & Withdraw"}
                            </button>


                            <button
                                type="button"
                                className="back-button"
                                onClick={() => {
                                    setWithdrawOTP("");
                                    setVerificationStep(
                                        "account"
                                    );
                                }}
                                disabled={
                                    isVerifying ||
                                    isLoading
                                }
                            >
                                Cancel
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        );
    }


    // ==========================================
    // ACCOUNT LOADING
    // ==========================================

    if (
        pageLoading ||
        !account
    ) {
        return (
            <div className="transaction-page">

                <div className="transaction-loading">
                    Loading account details...
                </div>

            </div>
        );
    }


    // ==========================================
    // ACCOUNT PAGE
    // ==========================================

    return (
        <div className="transaction-page">

            <div className="transaction-container">

                <div className="transaction-header">

                    <h1>
                        Deposit & Withdraw
                    </h1>

                    <p>
                        Manage your money directly from
                        your PayZen account.
                    </p>

                </div>


                {/* ACCOUNT */}

                <div className="account-card">

                    <div className="account-card-header">

                        <div>

                            <p className="small-title">
                                ACCOUNT HOLDER
                            </p>

                            <h2>
                                {
                                    account.userId?.name ||
                                    "User"
                                }
                            </h2>

                        </div>


                        <div className="balance-box">

                            <p>
                                Current Balance
                            </p>

                            <h2>
                                ₹
                                {Number(
                                    account.balance || 0
                                ).toLocaleString(
                                    "en-IN"
                                )}
                            </h2>

                        </div>

                    </div>


                    <div className="account-details">

                        <div className="detail-item">

                            <span>
                                Name
                            </span>

                            <strong>
                                {
                                    account.userId?.name ||
                                    "N/A"
                                }
                            </strong>

                        </div>


                        <div className="detail-item">

                            <span>
                                Email
                            </span>

                            <strong>
                                {
                                    account.userId?.email ||
                                    "N/A"
                                }
                            </strong>

                        </div>


                        <div className="detail-item">

                            <span>
                                Phone
                            </span>

                            <strong>
                                {
                                    account.userId?.phone ||
                                    "N/A"
                                }
                            </strong>

                        </div>


                        <div className="detail-item">

                            <span>
                                Account Number
                            </span>

                            <strong>
                                {
                                    account.accountNumber ||
                                    "N/A"
                                }
                            </strong>

                        </div>


                        <div className="detail-item">

                            <span>
                                Account Type
                            </span>

                            <strong>
                                {
                                    account.accountType ||
                                    "Savings"
                                }
                            </strong>

                        </div>

                    </div>

                </div>


                {/* TRANSACTION */}

                <div className="transaction-card">

                    <h2>
                        Make a Transaction
                    </h2>


                    <div className="amount-section">

                        <label htmlFor="amount">
                            Enter Amount
                        </label>


                        <div className="amount-input">

                            <span>
                                ₹
                            </span>

                            <input
                                id="amount"
                                type="number"
                                min="1"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) =>
                                    setAmount(
                                        e.target.value
                                    )
                                }
                                disabled={
                                    isLoading
                                }
                            />

                        </div>

                    </div>


                    <div className="transaction-buttons">

                        <button
                            type="button"
                            className="deposit-button"
                            onClick={
                                handleDeposit
                            }
                            disabled={
                                isLoading
                            }
                        >
                            {isLoading
                                ? "Processing..."
                                : "Deposit Money"}
                        </button>


                        <button
                            type="button"
                            className="withdraw-button"
                            onClick={
                                handleWithdrawRequest
                            }
                            disabled={
                                isLoading ||
                                isVerifying
                            }
                        >
                            {isVerifying
                                ? "Sending OTP..."
                                : "Withdraw Money"}
                        </button>

                    </div>

                </div>


                {/* HISTORY */}

                <div className="history-card">

                    <div className="history-header">

                        <h2>
                            Recent Transactions
                        </h2>

                    </div>


                    {transactions.length === 0 ? (

                        <div className="no-transactions">
                            No transactions found.
                        </div>

                    ) : (

                        <div className="transaction-list">

                            {transactions
                                .slice(0, 5)
                                .map(
                                    (transaction) => (
                                        <div
                                            className="transaction-row"
                                            key={
                                                transaction._id
                                            }
                                        >

                                            <div className="transaction-info">

                                                <div
                                                    className={
                                                        transaction.type ===
                                                        "deposit"
                                                            ? "transaction-icon deposit-icon"
                                                            : "transaction-icon withdraw-icon"
                                                    }
                                                >
                                                    {
                                                        transaction.type ===
                                                        "deposit"
                                                            ? "+"
                                                            : "-"
                                                    }
                                                </div>


                                                <div>

                                                    <h3>
                                                        {
                                                            transaction.type ===
                                                            "deposit"
                                                                ? "Money Deposited"
                                                                : "Money Withdrawn"
                                                        }
                                                    </h3>

                                                    <p>
                                                        {new Date(
                                                            transaction.createdAt
                                                        ).toLocaleString(
                                                            "en-IN"
                                                        )}
                                                    </p>

                                                </div>

                                            </div>


                                            <strong
                                                className={
                                                    transaction.type ===
                                                    "deposit"
                                                        ? "deposit-amount"
                                                        : "withdraw-amount"
                                                }
                                            >

                                                {
                                                    transaction.type ===
                                                    "deposit"
                                                        ? "+"
                                                        : "-"
                                                }

                                                ₹
                                                {Number(
                                                    transaction.amount
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}

                                            </strong>

                                        </div>
                                    )
                                )}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}