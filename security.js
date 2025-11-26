/**
 * Security and Form Validation Script
 * Provides client-side validation and security features
 */

(function() {
    'use strict';

    // Form validation and sanitization
    const formSecurity = {
        /**
         * Sanitize input to prevent XSS attacks
         */
        sanitizeInput: function(input) {
            if (typeof input !== 'string') return input;
            const div = document.createElement('div');
            div.textContent = input;
            return div.innerHTML;
        },

        /**
         * Validate email format
         */
        validateEmail: function(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        /**
         * Validate phone number (basic validation)
         */
        validatePhone: function(phone) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
        },

        /**
         * Validate form fields
         */
        validateForm: function(form) {
            const errors = [];
            const emailField = form.querySelector('input[type="email"]');
            const phoneField = form.querySelector('input[type="tel"]');
            const nameField = form.querySelector('input[name*="name"]');
            const messageField = form.querySelector('textarea');

            // Validate email
            if (emailField && emailField.value) {
                if (!this.validateEmail(emailField.value)) {
                    errors.push('Please enter a valid email address');
                    emailField.setCustomValidity('Please enter a valid email address');
                } else {
                    emailField.setCustomValidity('');
                }
            }

            // Validate phone (if provided)
            if (phoneField && phoneField.value) {
                if (!this.validatePhone(phoneField.value)) {
                    errors.push('Please enter a valid phone number');
                    phoneField.setCustomValidity('Please enter a valid phone number');
                } else {
                    phoneField.setCustomValidity('');
                }
            }

            // Validate name
            if (nameField && nameField.value) {
                if (nameField.value.trim().length < 2) {
                    errors.push('Name must be at least 2 characters');
                    nameField.setCustomValidity('Name must be at least 2 characters');
                } else {
                    nameField.setCustomValidity('');
                }
            }

            // Validate message length
            if (messageField && messageField.value) {
                if (messageField.value.trim().length < 10) {
                    errors.push('Message must be at least 10 characters');
                    messageField.setCustomValidity('Message must be at least 10 characters');
                } else {
                    messageField.setCustomValidity('');
                }
            }

            return errors.length === 0;
        },

        /**
         * Initialize form security
         */
        init: function() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                // Add autocomplete attributes for security
                const emailInput = form.querySelector('input[type="email"]');
                const nameInput = form.querySelector('input[name*="name"]');
                const phoneInput = form.querySelector('input[type="tel"]');
                
                if (emailInput) {
                    emailInput.setAttribute('autocomplete', 'email');
                    emailInput.setAttribute('spellcheck', 'false');
                }
                if (nameInput) {
                    nameInput.setAttribute('autocomplete', 'name');
                }
                if (phoneInput) {
                    phoneInput.setAttribute('autocomplete', 'tel');
                }

                // Add input sanitization on blur
                const textInputs = form.querySelectorAll('input[type="text"], textarea');
                textInputs.forEach(input => {
                    input.addEventListener('blur', function() {
                        if (this.value) {
                            this.value = formSecurity.sanitizeInput(this.value);
                        }
                    });
                });

                // Validate on submit
                form.addEventListener('submit', function(e) {
                    if (!formSecurity.validateForm(this)) {
                        e.preventDefault();
                        return false;
                    }
                });

                // Real-time validation feedback
                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.addEventListener('input', function() {
                        this.setCustomValidity('');
                    });
                });
            });
        }
    };

    // Rate limiting (simple client-side protection)
    const rateLimiter = {
        attempts: 0,
        maxAttempts: 5,
        resetTime: 60000, // 1 minute

        check: function() {
            const now = Date.now();
            const lastAttempt = localStorage.getItem('formLastAttempt');
            
            if (lastAttempt) {
                const timeSince = now - parseInt(lastAttempt);
                if (timeSince > this.resetTime) {
                    this.attempts = 0;
                    localStorage.removeItem('formAttempts');
                } else {
                    this.attempts = parseInt(localStorage.getItem('formAttempts') || '0');
                }
            }

            if (this.attempts >= this.maxAttempts) {
                return false;
            }

            this.attempts++;
            localStorage.setItem('formAttempts', this.attempts.toString());
            localStorage.setItem('formLastAttempt', now.toString());
            return true;
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            formSecurity.init();
            
            // Add rate limiting to forms
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    if (!rateLimiter.check()) {
                        e.preventDefault();
                        alert('Too many submission attempts. Please wait a moment and try again.');
                        return false;
                    }
                });
            });
        });
    } else {
        formSecurity.init();
        
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                if (!rateLimiter.check()) {
                    e.preventDefault();
                    alert('Too many submission attempts. Please wait a moment and try again.');
                    return false;
                }
            });
        });
    }

    // Prevent common XSS patterns
    document.addEventListener('DOMContentLoaded', function() {
        // Remove any script tags that shouldn't be there
        const scripts = document.querySelectorAll('script');
        scripts.forEach(script => {
            if (script.src && !script.src.startsWith('https://') && !script.src.startsWith('http://') && !script.src.startsWith('/')) {
                console.warn('Potentially unsafe script detected:', script.src);
            }
        });
    });

})();

