// Main JavaScript for Premedix

// PREX AI Chat Functionality
class PrexAI {
    constructor() {
        this.chatMessages = document.querySelector('.chat-messages');
        this.chatInput = document.querySelector('.chat-input input');
        this.sendButton = document.querySelector('.chat-input button');
        this.initializeChat();
    }

    initializeChat() {
        // Welcome message
        this.addMessage('Hello! I am PREX, your AI Equipment Management Assistant. How can I help you today?', 'prex');
        
        // Event listeners
        this.sendButton?.addEventListener('click', () => this.handleUserInput());
        this.chatInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });
    }

    handleUserInput() {
        const message = this.chatInput.value.trim();
        if (message) {
            this.addMessage(message, 'user');
            this.chatInput.value = '';
            this.generateResponse(message);
        }
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${sender}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    generateResponse(userInput) {
        // Simulate AI response
        setTimeout(() => {
            let response = "I'm analyzing your request...";
            this.addMessage(response, 'prex');
        }, 500);
    }
}

// Equipment Management
class EquipmentManager {
    constructor() {
        this.initializeEquipmentFilters();
        this.initializeEquipmentActions();
    }

    initializeEquipmentFilters() {
        const filterButton = document.querySelector('.btn-filter');
        filterButton?.addEventListener('click', () => {
            // Implement filtering logic
        });
    }

    initializeEquipmentActions() {
        document.querySelectorAll('.action-buttons button').forEach(button => {
            button.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.tooltip;
                const equipmentId = e.currentTarget.closest('tr').querySelector('td:first-child').textContent;
                this.handleEquipmentAction(action, equipmentId);
            });
        });
    }

    handleEquipmentAction(action, equipmentId) {
        switch(action) {
            case 'Edit':
                // Implement edit logic
                break;
            case 'View History':
                // Implement history view logic
                break;
            case 'More':
                // Implement more options logic
                break;
        }
    }
}

// Utilities Management
class UtilitiesManager {
    constructor() {
        this.initializeUtilityControls();
    }

    initializeUtilityControls() {
        document.querySelectorAll('.utility-controls input[type="range"]').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                const utilityCard = e.target.closest('.utility-card');
                const statValue = utilityCard.querySelector('.stat-value');
                if (statValue) {
                    // Update utility values based on slider
                    this.updateUtilityValue(utilityCard, value);
                }
            });
        });
    }

    updateUtilityValue(card, value) {
        const type = card.querySelector('h3').textContent;
        switch(type) {
            case 'Lighting Systems':
                card.querySelector('.stat-value').textContent = `${value}%`;
                break;
            case 'Ventilation':
                card.querySelector('.stat-value').textContent = `${value * 12} CFM`;
                break;
            case 'Medical Supplies':
                card.querySelector('.stat-value').textContent = `${value}%`;
                break;
        }
    }
}

// Charts and Analytics
class Analytics {
    constructor() {
        this.initializeCharts();
    }

    initializeCharts() {
        const chartCanvas = document.querySelector('.report-chart');
        if (chartCanvas) {
            new Chart(chartCanvas, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Equipment Performance',
                        data: [95, 93, 94, 92, 95, 93],
                        borderColor: '#2A9D8F',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });
        }
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize PREX AI if on AI reports page
    if (document.querySelector('.prex-chat-card')) {
        new PrexAI();
    }

    // Initialize Equipment Manager if on equipment page
    if (document.querySelector('.equipment-table')) {
        new EquipmentManager();
    }

    // Initialize Utilities Manager if on utilities page
    if (document.querySelector('.utility-card')) {
        new UtilitiesManager();
    }

    // Initialize Analytics if charts are present
    if (document.querySelector('.report-chart')) {
        new Analytics();
    }

    // Handle active navigation states
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}); 